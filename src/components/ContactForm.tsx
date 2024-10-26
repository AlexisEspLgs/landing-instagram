'use client'

import { useState, forwardRef } from 'react'
import Button from "./ui/button"
import Textarea from './ui/Textarea'
import { Instagram, Phone, Mail } from "lucide-react"
import Input from './ui/Input'

const ContactForm = forwardRef<HTMLElement>((props, ref) => {
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    console.log(Object.fromEntries(formData))
    await new Promise(resolve => setTimeout(resolve, 1000))
    setFormStatus('¡Formulario enviado con éxito!')
    event.currentTarget.reset()
  }

  return (
    <section ref={ref} className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
            <Input id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="instagram" className="block text-sm font-medium mb-1">Usuario de Instagram</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                <Instagram className="h-5 w-5" />
              </span>
              <Input id="instagram" name="instagram" className="rounded-l-none" required />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">Número telefónico</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                <Phone className="h-5 w-5" />
              </span>
              <Input id="phone" name="phone" type="tel" className="rounded-l-none" required />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Correo electrónico</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                <Mail className="h-5 w-5" />
              </span>
              <Input id="email" name="email" type="email" className="rounded-l-none" required />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
            <Textarea  id="message" name="message" rows={4} />
          </div>
          <Button type="submit" className="w-full bg-[#405DE6] hover:bg-[#5851DB]">Enviar</Button>
        </form>
        {formStatus && (
          <p className="mt-4 text-center text-green-600">{formStatus}</p>
        )}
      </div>
    </section>
  )
})

ContactForm.displayName = 'ContactForm'

export default ContactForm