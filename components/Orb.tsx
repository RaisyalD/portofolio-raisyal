"use client"
import { useRef, useEffect } from "react"
import * as THREE from "three"

interface OrbProps {
  hoverIntensity?: number
  rotateOnHover?: boolean
  hue?: number
  forceHoverState?: boolean
}

export default function Orb({
  hoverIntensity = 0.5,
  rotateOnHover = true,
  hue = 0,
  forceHoverState = false,
}: OrbProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const isHoveredRef = useRef<boolean>(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Setup
    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Scene
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Shader material
    const vertexShader = `
      varying vec2 vUv;
      varying vec3 vPosition;
      varying vec3 vNormal;
      
      void main() {
        vUv = uv;
        vPosition = position;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      uniform float uTime;
      uniform float uHoverIntensity;
      uniform float uHue;
      uniform vec2 uMouse;
      
      varying vec2 vUv;
      varying vec3 vPosition;
      varying vec3 vNormal;
      
      vec3 hsb2rgb(vec3 c) {
        vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0);
        rgb = rgb * rgb * (3.0 - 2.0 * rgb);
        return c.z * mix(vec3(1.0), rgb, c.y);
      }
      
      void main() {
        // Calculate distance from mouse position
        float distanceToMouse = length(uMouse - vUv);
        
        // Base color with time-based animation
        float hue = uHue / 360.0 + uTime * 0.05;
        float saturation = 0.8;
        float brightness = 0.6 + 0.4 * sin(uTime * 0.2);
        
        // Add hover effect
        brightness += (1.0 - smoothstep(0.0, 0.5, distanceToMouse)) * uHoverIntensity;
        
        // Add rim lighting
        float rim = 1.0 - max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0)));
        brightness += rim * 0.3;
        
        // Convert HSB to RGB
        vec3 color = hsb2rgb(vec3(hue, saturation, brightness));
        
        gl_FragColor = vec4(color, 0.9);
      }
    `

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uHoverIntensity: { value: hoverIntensity },
        uHue: { value: hue / 360 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      },
      transparent: true,
    })
    materialRef.current = material

    // Create sphere
    const geometry = new THREE.SphereGeometry(2, 64, 64)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Mouse events
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current.x = (event.clientX - rect.left) / rect.width
      mouseRef.current.y = 1 - (event.clientY - rect.top) / rect.height
    }

    const handleMouseEnter = () => {
      isHoveredRef.current = true
    }

    const handleMouseLeave = () => {
      isHoveredRef.current = false
      mouseRef.current.x = 0.5
      mouseRef.current.y = 0.5
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    // Animation loop
    let rotationSpeed = 0.001
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      if (materialRef.current) {
        materialRef.current.uniforms.uTime.value = elapsedTime
        materialRef.current.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y)
      }

      // Rotate the orb
      if (rotateOnHover && (isHoveredRef.current || forceHoverState)) {
        rotationSpeed = THREE.MathUtils.lerp(rotationSpeed, 0.01, 0.05)
      } else {
        rotationSpeed = THREE.MathUtils.lerp(rotationSpeed, 0.001, 0.05)
      }

      mesh.rotation.y += rotationSpeed
      mesh.rotation.z += rotationSpeed * 0.7

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return

      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()

      rendererRef.current.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)

      if (rendererRef.current && rendererRef.current.domElement) {
        container.removeChild(rendererRef.current.domElement)
      }

      if (geometry) geometry.dispose()
      if (material) material.dispose()
      if (renderer) renderer.dispose()
    }
  }, [hoverIntensity, rotateOnHover, hue, forceHoverState])

  return <div ref={containerRef} className="w-full h-full absolute inset-0" />
}
