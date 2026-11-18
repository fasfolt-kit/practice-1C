<script setup>
defineProps({ course: { type: Object, required: true } })
</script>

<template>
  <article class="card">
    <div class="card__img" :style="course.img ? { backgroundImage: `url(${course.img})` } : null" aria-hidden="true"></div>
    <div class="card__body">
      <div class="card__top">
        <h3>{{ course.title }}</h3>
        <div class="badges">
          <span v-if="course.firstFree" class="badge badge--outline">Первое бесплатно</span>
          <span class="badge">{{ course.price === 0 ? 'Бесплатно' : course.priceText }}</span>
        </div>
      </div>
      <div class="tag">#{{ course.tag }}</div>
      <p class="line"><span class="ico">👤</span>{{ course.age }}</p>
      <p class="line"><span class="ico">🏢</span>{{ course.address }}</p>
      <p class="line"><span class="ico">📍</span>{{ course.place }}</p>
      <div class="line schedule">
        <span class="ico">🕒</span>{{ course.days }}
        <span v-for="t in course.times" :key="t" class="chip">{{ t }}</span>
        <router-link :to="`/course/${course.id}`" class="btn card__more">Подробнее</router-link>
      </div>
    </div>
  </article>
</template>
