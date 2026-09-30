<script>
  import emailjs from '@emailjs/browser'
  import { Send } from '@lucide/svelte'

  let formElement
  let name = $state('')
  let email = $state('')
  let message = $state('')
  let sending = $state(false)
  let status = $state('')

  async function handleSubmit() {
    sending = true
    status = ''

    try {
      await emailjs.sendForm('service_buqycuf', 'template_axqfyt7', formElement, 'huSEEz8gikeLQdJlS')
      status = 'Message sent successfully!'
      name = ''
      email = ''
      message = ''
    } catch {
      status = 'Please try again'
    } finally {
      sending = false
    }
  }
</script>

<section id="contact-me" class="relative min-h-[85vh] scroll-mt-20 py-20 sm:py-24 lg:py-28">
  <h2 class="mb-10 flex items-center gap-4 after:h-0.5 after:flex-1 after:bg-linear-to-r after:from-ink after:to-transparent after:opacity-30 after:content-['']">contact me</h2>
  <p class="mb-10 text-lg">email: ntytomg@gmail.com</p>

  <form bind:this={formElement} class="max-w-3xl" onsubmit={(event) => { event.preventDefault(); handleSubmit() }}>
    <label class="my-8 block text-[1.05rem]">
      <span>Name</span>
      <input class="mt-3 block w-full resize-y rounded-none border-0 border-b-2 border-ink bg-transparent px-[0.2rem] py-[0.45rem] text-ink outline-none transition-[background,padding] duration-200 focus:bg-sky/20 focus:px-[0.6rem]" name="from_name" type="text" bind:value={name} autocomplete="name" />
    </label>

    <label class="my-8 block text-[1.05rem]">
      <span>Email Address *</span>
      <input class="mt-3 block w-full resize-y rounded-none border-0 border-b-2 border-ink bg-transparent px-[0.2rem] py-[0.45rem] text-ink outline-none transition-[background,padding] duration-200 focus:bg-sky/20 focus:px-[0.6rem]" name="from_email" type="email" bind:value={email} autocomplete="email" required />
    </label>

    <label class="my-8 block text-[1.05rem]">
      <span>Message *</span>
      <textarea class="mt-3 block w-full resize-y rounded-none border-0 border-b-2 border-ink bg-transparent px-[0.2rem] py-[0.45rem] text-ink outline-none transition-[background,padding] duration-200 focus:bg-sky/20 focus:px-[0.6rem]" name="html_message" bind:value={message} rows="4" required></textarea>
    </label>

    <div class="mt-10 flex flex-wrap items-center justify-between gap-6">
      <div class="flex items-center gap-5">
        <a class="grid h-11 w-11 place-items-center rounded-full border border-ink/25 text-ink transition-[color,background,transform] duration-200 hover:-translate-y-[0.15rem] hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink" href="https://github.com/nicoletanyt" target="_blank" rel="noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
            <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.22c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.28 5.67.42.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
          </svg>
        </a>
        <a class="grid h-11 w-11 place-items-center rounded-full border border-ink/25 text-xs font-[750] tracking-[-0.08em] text-ink transition-[color,background,transform] duration-200 hover:-translate-y-[0.15rem] hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink" href="https://leetcode.com/u/nicoletanyt/" target="_blank" rel="noreferrer" aria-label="LeetCode">
          <span aria-hidden="true">LC</span>
        </a>
        <a class="grid h-11 w-11 place-items-center rounded-full border border-ink/25 text-ink transition-[color,background,transform] duration-200 hover:-translate-y-[0.15rem] hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink" href="https://www.linkedin.com/in/nicole-tan-a1a360266/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" width="27" height="27" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
          </svg>
        </a>
      </div>

      <button type="submit" class="inline-flex cursor-pointer items-center gap-[0.65rem] rounded-[0.65rem] border border-ink bg-ink px-[1.35rem] py-3 font-semibold text-paper transition-colors duration-200 hover:bg-transparent hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink disabled:cursor-wait disabled:opacity-60" disabled={sending}>
        <span>Submit</span><Send size={18} />
      </button>
    </div>

    <p class="mt-5 min-h-7 font-semibold" role="status" aria-live="polite">{status}</p>
  </form>
</section>
