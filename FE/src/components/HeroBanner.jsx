import React from 'react'

function HeroBanner() {
  return (
    <section className="relative h-[921px] w-full overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwMkRPjFzpwxMo14LWb5n_oTnEVEUulcN4pwAbnOpeEIp_y2Pi_WyjGDk5mitK1PEWYX4TyvzoqJte22-fnE4ayE-G_vh9dRQou-dWlhpSs9I81FsBU7AqcvtT4skyBtCQ_CLKof_khTUo7jWRItK7mEXI9FeQRqpKpxMUc7cXC_UVn1R34Jb7VmidUZ2ip587Lhrmm1g4f8bWAAsNNXnhUMdHKS-q-LhIJvwHBf0vR8tGJSCRUdo156pvrqJzC4Sfq_xwUiEAxA"
        alt="A cinematic wide-angle shot of a high-end fashion model standing in a minimalist concrete gallery"
      />
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative h-full flex flex-col justify-center items-center text-center px-gutter">
        <h1 className="font-display-lg text-display-lg md:text-[64px] text-white tracking-[0.3em] mb-md">
          NEW COLLECTION 2024
        </h1>
        <p className="font-body-lg text-body-lg text-white/90 max-w-xl mb-lg tracking-wide uppercase">
          Elevate your style with our latest minimalist arrivals.
        </p>
        <a
          className="bg-primary text-on-primary px-xl py-md font-label-sm text-label-sm uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
          href="#"
        >
          Shop Now
        </a>
      </div>
    </section>
  )
}

export default HeroBanner
