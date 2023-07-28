"use client"
import { ChakraProvider } from '@chakra-ui/react'
import { Container } from '@/components/layout/Container'

export default function Home() {
  return (
    <ChakraProvider>
    <div>
      <Container />
    </div>
    </ChakraProvider>
  )
}
