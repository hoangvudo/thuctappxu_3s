import React, { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <section className="py-2xl bg-surface border-y border-outline-variant">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col items-center text-center">
        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-[0.2em] mb-md block">
          Join the community
        </span>
        <h2 className="font-display-lg text-headline-md tracking-[0.1em] mb-lg">
          UNCOMPROMISING MINIMALISM DELIVERED.
        </h2>
        <form onSubmit={handleSubscribe} className="w-full max-w-md flex flex-col md:flex-row gap-0">
          <input
            className="flex-1 bg-transparent border border-outline-variant focus:border-primary focus:ring-0 font-label-sm text-label-sm px-md py-md tracking-widest text-primary"
            placeholder="YOUR EMAIL ADDRESS"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            className="bg-primary text-on-primary px-lg py-md font-label-sm text-label-sm uppercase tracking-[0.2em] hover:bg-on-surface transition-colors"
            type="submit"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-md font-body-md text-body-md text-on-surface-variant opacity-70">
          By subscribing, you agree to our privacy policy.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
