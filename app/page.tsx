"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  }

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { duration: 0.6, delay: 1.2 + i * 0.1 },
    }),
  }

  const cornerImageVariants = {
    hidden: { opacity: 0, x: 20, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay: 1.5, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      className="w-screen h-screen overflow-hidden flex flex-col justify-between items-stretch relative bg-[#FDF2A5]"
      initial={{ opacity: 0 }}
      animate={isLoaded ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Logo centrado arriba */}
      <motion.div className="pt-22"  initial="hidden" animate={isLoaded ? "visible" : "hidden"}>
        <div className="text-center">
          <motion.div
            className="text-5xl font-bold text-white mb-2 flex flex-row items-center justify-center"
            animate={isLoaded ? { rotate: [0, -5, 5, 0] } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
                      <img
              src="/logoborde.png"
              alt="Decorative corner element"
              className="w-22 h-22 md:w-48 md:h-48 object-cover opacity-80"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Contenido central */}
      <motion.div
        className="flex-1 flex flex-col items-center justify-start h-min-content px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-3xl font-bold text-black text-center max-w-2xl leading-tight"
        >
          ¿Quieres aprender más?
        </motion.h2>
                  {/* Redes sociales */}
                  <motion.div  className="text-center">
            <h3 className="text-lg font-semibold text-black mb-2">Sígueme en redes sociales</h3>
            <div className="flex gap-6 justify-center items-center">
                <motion.div
                  variants={socialVariants}
                  initial="hidden"
                  animate={isLoaded ? "visible" : "hidden"}
                  className={`text-slate-300 transition-colors`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="flex flex-row items-center justify-center gap-4">
                    <Link href={"https://www.instagram.com/soycarabis"}>
                    <img
                    src="/instagram.png"
                    alt="Decorative corner element"
                    className="w-12 h-12 md:w-32 md:h-32 object-cover opacity-80"
                  />
                    </Link>
                    <Link href={"https://www.tiktok.com/@soycarabis"}>
                    <img
                    src="/tiktok.png"
                    alt="Decorative corner element"
                    className="w-12 h-12 md:w-32 md:h-32 object-cover opacity-80"
                  />
                    </Link>
                    <Link href={"https://t.me/+KRNfWJgOP08xN2Rh"}>
                    <img
                    src="/telegram.png"
                    alt="Decorative corner element"
                    className="w-12 h-12 md:w-32 md:h-32 object-cover opacity-80"
                  />
                    </Link>
                  </div>
                  
                </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative mt-12"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <div className="absolute inset-0 rounded-full backdrop-blur-md bg-black/10 border border-green-500/20" />

            <motion.button
              disabled
              className="relative z-10 px-8 py-3 text-white font-semibold rounded-full cursor-not-allowed"
            >
              Carabis AI
            </motion.button>

            <motion.div
              className="absolute -top-3 -right-3 z-20"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Soon</div>
            </motion.div>
          </motion.div>
      </motion.div>

      {/* Sección inferior - con imagen alineada a la derecha */}
      <motion.div
        className="w-full "
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="flex flex-col items-center">
          {/* CTA */}

          <motion.div
            className="w-full flex justify-end"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <img
              src="/soycarabisperson.png"
              alt="Decorative corner element"
              className="w-70 md:w-60 md:h-full object-cover opacity-80 h-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
