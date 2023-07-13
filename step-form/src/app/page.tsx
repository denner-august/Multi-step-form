"use client"
import { ChakraProvider } from '@chakra-ui/react'
import { Container } from '@/components/layout/Container'
import styles from '../styles/page.module.scss'

export default function Home() {
  return (
    <ChakraProvider>
    <div className={styles.container}>
      <Container />
    </div>
    </ChakraProvider>
  )
}
