<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { courses } from '../data'

const route = useRoute()
const router = useRouter()
const course = computed(() => courses.find((c) => c.id === +route.params.id) || courses[0])

const levels = ref([
  { name: 'Базовый уровень', open: true, text: [
    'Базовый уровень сложности первого-второго год обучения, 252 часа.',
    '• Обязательные предметы области (количество часов – 15);',
    '• Вариативные предметы области (количество часов –10);',
    '• Теория (количество часов –5);',
    '• Практика (количество часов - 216);',
    '• Самостоятельная работа (количество часов –2);',
    '• Аттестация (количество часов - 4).' ] },
  { name: 'Углубленный уровень', open: false, text: ['Содержание углубленного уровня.'] },
])
const program = ref(true)
</script>

<template>
  <div class="toolbar">
    <button class="map-btn" @click="router.back()">‹ Назад</button>
    <button class="map-btn">На карте 📍</button>
  </div>
  <h2 class="section-title title-lg">{{ course.title }}</h2>

  <article class="card detail">
    <div class="detail__img" :style="course.img ? { backgroundImage: `url(${course.img})` } : null" aria-hidden="true"></div>
    <div class="detail__info">
      <div class="badges">
        <span class="badge badge--outline">Набор открыт</span>
        <span class="badge">{{ course.price === 0 ? 'Бесплатно' : course.priceText }}</span>
      </div>
      <p class="line"><span class="ico">👤</span>{{ course.age }}</p>
      <p class="line"><span class="ico">🏢</span>{{ course.address }}</p>
      <p class="line"><span class="ico">📍</span>{{ course.place }}</p>
      <button class="btn detail__sign">Записаться</button>
    </div>
  </article>

  <section class="card block two-col">
    <div>
      <h4>ГРУППЫ</h4>
      <p><b>Этап начальной подготовки</b></p>
      <p class="line"><span class="ico">🎓</span>Петрова Елена Александровна</p>
      <p class="line"><span class="ico">👥</span>15 из 20</p>
      <p class="line"><span class="ico">⏳</span>12 месяцев</p>
    </div>
    <div>
      <h4>РАСПИСАНИЕ ЗАНЯТИЙ</h4>
      <p class="line"><span class="ico">🕒</span>Пн, Вт, Чт, Сб</p>
      <p class="line"><span class="ico">🕒</span>Пн, Вт, Чт, Сб
        <span class="chip">08:00 - 10:00</span><span class="chip">18:00 - 19:30</span></p>
    </div>
  </section>

  <section class="card block">
    <h4>ОПИСАНИЕ</h4>
    <p class="small">Легкая атлетика - олимпийский вид спорта, объединяющий беговые виды, спортивную ходьбу, технические виды (прыжки и метания), многоборья, пробеги (бег по шоссе), кроссы (бег по пересеченной местности).</p>
  </section>

  <section class="card block">
    <button class="acc acc--main" @click="program = !program">СОДЕРЖАНИЕ ПРОГРАММЫ <span>{{ program ? '⌃' : '⌄' }}</span></button>
    <div v-if="program">
      <div v-for="l in levels" :key="l.name">
        <button class="acc" @click="l.open = !l.open">{{ l.name }} <span>{{ l.open ? '⌃' : '⌄' }}</span></button>
        <div v-if="l.open" class="small"><p v-for="t in l.text" :key="t">{{ t }}</p></div>
      </div>
    </div>
  </section>
</template>
