"use client";

import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
            >
              Welcome to <span className="text-primary">Revora Ride</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Motorcycle-inspired balance bikes crafted from steel, built to
              last generations. Each bike is designed not just as a toy, but as
              a cherished icon of childhood adventure.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="text-lg px-8 py-6">
                Shop Bikes
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Collection
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <HeroSection
        id="about"
        title="About Revora Ride"
        description="Revora Ride creates motorcycle-inspired balance bikes that are as durable as they are timeless. Crafted from steel, each bike is built to last generations, designed not just as a toy, but as a cherished icon of childhood adventure. We believe in creating bikes that inspire the next generation of riders."
        imageSrc="/images/children-bikes-showroom.jpg"
        imageAlt="Revora Ride children's balance bike showroom"
      />

      {/* Services Section */}
      <HeroSection
        id="services"
        title="Our Balance Bike Collection"
        description="From first-time riders to confident adventurers, our steel balance bikes are designed to grow with your child. Each bike features motorcycle-inspired aesthetics, premium steel construction, and timeless design that will be cherished for generations. Built to withstand years of adventure and play."
        imageSrc="/images/children-bikes-collection.jpg"
        imageAlt="Collection of Revora Ride steel balance bikes"
        reverse={true}
      />

      {/* Facility Section */}
      <HeroSection
        id="facility"
        title="Our Craftsmanship Workshop"
        description="Every Revora Ride balance bike is carefully crafted in our workshop, where attention to detail meets timeless design. Our skilled craftsmen ensure each steel frame is perfectly constructed, every component is precisely fitted, and every bike meets our exacting standards for durability and beauty."
        imageSrc="/images/bicycle-showroom-workshop.jpg"
        imageAlt="Revora Ride craftsmanship workshop"
      />

      {/* Contact CTA Section */}
      <section id="contact" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ready to Start Your Child&apos;s Adventure?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Give your child a balance bike that&apos;s built to last
              generations. Our steel construction and motorcycle-inspired design
              create a timeless piece that will be cherished as both a toy and a
              family heirloom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                View Collection
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
