import { Shield, Sun, Droplet, Leaf, Star, Sparkles, Heart, Flower } from 'lucide-react';

export const ingredients = [
  {
    name: 'Ceramides',
    description: "Strengthen the skin's barrier and retain moisture.",
    icon: Shield
  },
  {
    name: 'Niacinamide',
    description: 'Reduces inflammation and brightens skin.',
    icon: Sun
  },
  {
    name: 'Hyaluronic Acid',
    description: 'Deeply hydrates and plumps the skin.',
    icon: Droplet
  },
  {
    name: 'Argan Oil',
    description: 'Rich in antioxidants, protects and nourishes.',
    icon: Leaf
  },
  {
    name: 'Mandelic Acid',
    description: 'Gentle exfoliation and skin renewal.',
    icon: Star
  },
  {
    name: 'Salicylic Acid',
    description: 'Deep cleanses pores and fights acne.',
    icon: Sparkles
  },
  {
    name: 'Oat Proteins',
    description: 'Soothes and protects sensitive skin.',
    icon: Heart
  },
  {
    name: 'Peptides',
    description: 'Stimulate collagen production for a youthful glow.',
    icon: Flower
  }
] as const;