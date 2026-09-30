<script>
    import data from "../data/portfolio.json";
    import aboutMeImage from "../../assets/about-me.jpeg";
    import ngeeAnnLogo from "../../assets/ngee-ann-logo.png";
    import peiTongLogo from "../../assets/pei-tong-logo.png";
    import sstLogo from "../../assets/sst-logo.png";
    import kinokuniyaLogo from "../../assets/kinokuniya-logo.png";
    import lcclLogo from "../../assets/lccl-logo.svg";

    const educationLogos = {
        "ngee-ann": ngeeAnnLogo,
        "pei-tong": peiTongLogo,
        sst: sstLogo,
    };
    const experienceLogos = {
        kinokuniya: kinokuniyaLogo,
        lccl: lcclLogo,
    };
</script>

<section id="about-me" class="relative scroll-mt-20 py-20 sm:py-24 lg:py-28">
    <h2
        class="mb-10 flex items-center gap-4 after:h-0.5 after:flex-1 after:bg-linear-to-r after:from-ink after:to-transparent after:opacity-30 after:content-['']"
    >
        about me
    </h2>

    <div
        class="grid items-center gap-10 md:grid-cols-[minmax(15rem,0.8fr)_1.4fr] lg:grid-cols-1 xl:grid-cols-[minmax(15rem,0.8fr)_1.4fr]"
    >
        <div
            class="relative isolate w-[min(100%,22rem)] before:absolute before:top-[0.3rem] before:-left-4 before:z-10 before:h-[1.8rem] before:w-[28%] before:-rotate-40 before:bg-sky before:content-[''] after:absolute after:inset-[0.8rem_-0.8rem_-0.8rem_0.8rem] after:-z-10 after:border-2 after:border-ink/25 after:content-[''] after:[clip-path:polygon(20%_0,80%_0,100%_20%,100%_80%,80%_100%,20%_100%,0_80%,0_20%)]"
        >
            <img
                src={aboutMeImage}
                alt="Nicole Tan"
                class="aspect-square w-full object-cover [clip-path:polygon(20%_0,80%_0,100%_20%,100%_80%,80%_100%,20%_100%,0_80%,0_20%)]"
                width="400"
                height="400"
            />
        </div>
        <p class="text-base sm:text-lg sm:leading-9">
            Hi, I'm Nicole Tan YiTong, an 18-year-old student at Ngee Ann
            Polytechnic pursuing a double major in Information Technology and
            Business, and a DSTA Polytechnic Digital Scholar with a passion for
            coding, particularly web development and artificial intelligence :)
            <br />
            Aside from coding, I am an avid reader, math enthusiast, and milk tea
            lover. I am always eager to learn new things and tackle challenges.
            <br />
            I aspire to continue exploring different aspects of technology and creating
            apps that benefit the community!
            <br /> <br />
            <a
                class="font-bold italic underline decoration-2 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                href="#contact-me">Drop me a message!</a
            >
        </p>
    </div>

    <h3 class="my-10 italic">~ education</h3>
    <div class="divide-y divide-ink/15 border-y border-ink/15">
        {#each data.education as item (item.year)}
            <article
                class={`grid grid-cols-[4.5rem_minmax(0,1fr)] items-center gap-x-4 gap-y-1 px-3 py-5 sm:grid-cols-[6rem_minmax(0,1fr)_auto] sm:gap-x-6 sm:px-5 ${item.current ? "border-l-2 border-ink bg-sky/20" : ""}`}
            >
                <div
                    class="row-span-2 flex h-14 items-center justify-center sm:row-span-1"
                >
                    <img
                        src={educationLogos[item.logo]}
                        alt={`${item.school} logo`}
                        class="max-h-14 max-w-full object-contain"
                        loading="lazy"
                    />
                </div>

                <div class="min-w-0 gap-1 grid">
                    <p class="leading-6 font-medium">
                        {item.school}
                    </p>
                    {#if item.details}
                        <p class="mt-0.5 text-sm font-base text-ink/75">
                            {item.details}
                        </p>
                    {/if}
                    {#if item.cgpa}
                        <p class="mt-1 text-sm font-semibold text-ink">
                            CGPA: {item.cgpa}
                        </p>
                    {/if}
                </div>

                <p
                    class="col-start-2 text-sm font-medium whitespace-nowrap text-ink/70 sm:col-start-3 sm:row-start-1 sm:text-right"
                >
                    {item.year} – {item.endYear ?? "Present"}
                </p>
            </article>
        {/each}
    </div>

    <h3 class="my-10 italic">~ experience</h3>
    <div class="divide-y divide-ink/15 border-y border-ink/15">
        {#each data.experience as item (`${item.company}-${item.year}`)}
            <article
                class={`grid grid-cols-[4.5rem_minmax(0,1fr)] items-center gap-x-4 gap-y-1 px-3 py-4 sm:grid-cols-[6rem_minmax(0,1fr)_auto] sm:gap-x-6 sm:px-5 ${item.current ? "border-l-2 border-ink bg-sky/20" : ""}`}
            >
                <div
                    class="row-span-2 flex h-14 items-center justify-center sm:row-span-1"
                >
                    <img
                        src={experienceLogos[item.logo]}
                        alt={`${item.company} logo`}
                        class="max-h-14 max-w-full object-contain"
                        loading="lazy"
                    />
                </div>
                <div class="min-w-0">
                    <p class="font-medium leading-6">{item.role}</p>
                    <p class="mt-0.5 text-sm font-medium text-ink/65">
                        {item.company}
                    </p>
                </div>
                <p
                    class="col-start-2 text-sm font-medium whitespace-nowrap text-ink/70 sm:col-start-3 sm:row-start-1 sm:text-right"
                >
                    {item.month}
                    {item.year} – {item.current
                        ? "Present"
                        : `${item.endMonth} ${item.endYear}`}
                </p>
            </article>
        {/each}
    </div>
</section>
