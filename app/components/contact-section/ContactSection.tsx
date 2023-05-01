'use client'

import { QueryClient, QueryClientProvider } from 'react-query';

import Form from "../form"

const ContactSection = () => {

    const queryClient = new QueryClient()

  return (
      <section className="bg-transparent pb-24 pt-16 lg:pt-20 flex flex-col lg:flex-row gap-y-12 lg:gap-y-0 lg:gap-x-56 justify-between">
        <div>
            <h2 className='text-center lg:text-start text-4xl sm:text-7xl lg:text-heading-xl mb-5 lg:mb-9'>Contact</h2>
            <p className="text-base text-center lg:text-start max-w-md m-auto lg:m-0">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>
            <QueryClientProvider client={queryClient}>
                <Form />
            </QueryClientProvider>
        </section>
  )
}

export default ContactSection