<template>
  <section class="ta-container">
    <h1>Contact</h1>

    <h2>Looking to Enroll?</h2>
    <ul>
      <li>
        Schedule a Tour
        <span class="text-sm">(see below)</span>
      </li>
      <li>Complete Placement Testing</li>
      <li>Submit Application & Deposit</li>
      <li>Begin the Thrive Journey!</li>
    </ul>
  </section>
  <section class="ta-container">
    <PageHeading> Schedule a Tour </PageHeading>

    <p class="lg:text-xl text-lg text-center mb-10">
      We invite you to take the first step in your child's educational journey
      by scheduling a tour of Thrive Academy. During your visit, you'll have the
      opportunity to see our learning environment firsthand, meet our dedicated
      teachers, and learn more about our unique educational approach. Tours
      typically last about an hour and give both parents and prospective
      students a comprehensive overview of what makes our academy special.
      Contact us today to schedule your personalized tour.
    </p>
    <div class="flex flex-col lg:flex-row lg:w-2/2 mx-auto">
      <div class="block border-x-angel text-navy flex-col">
        <Icon
          name="material-symbols:smartphone-outline-sharp"
          size="5em"
          class="icon"
        />
        <p><a href="tel:8139708680" class="contact">813-970-8680</a></p>
      </div>
      <div class="block border-x-angel text-navy flex-col">
        <Icon
          name="material-symbols-light:mail-outline-rounded"
          size="5em"
          class="icon"
        />
        <p>
          <a
            href="mailto:yulonda.smith.ys@gmail.com?subject=Thrive Academy Tour Inquiry"
            class="contact"
          >
            yulonda.smith.ys@gmail.com
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "tailwindcss";

.contact {
  @apply lg:text-4xl md:text-2xl;
}

.icon {
  @apply mb-5;
}

ul {
  @apply ml-10;
}

li {
  @apply list-disc lg:text-3xl text-xl lg:mb-3 mb-2;
}

.block {
  @apply lg:w-1/2 text-center lg:border-x-2 py-10;
}
</style>
