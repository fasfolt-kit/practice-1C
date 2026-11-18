<script setup>
import { ref, computed } from 'vue'
import { courses } from '../data'
import CourseCard from '../components/CourseCard.vue'
import FiltersPanel from '../components/FiltersPanel.vue'

const search = ref('')
const tab = ref('all')
const tabs = [['all', 'Все'], ['paid', 'Платные'], ['free', 'Бесплатные']]

const groups = computed(() => {
  const q = search.value.trim().toLowerCase()
  const list = courses.filter((c) =>
    (!q || c.title.toLowerCase().includes(q)) &&
    (tab.value === 'all' || (tab.value === 'free' ? c.price === 0 : c.price > 0)))
  const map = {}
  list.forEach((c) => (map[c.sec] ||= { cat: c.cat, items: [] }).items.push(c))
  return Object.values(map)
})
</script>

<template>
  <div class="toolbar">
    <label class="search">🔍 <input v-model="search" placeholder="Поиск" /></label>
    <div class="tabs">
      <button v-for="[k, l] in tabs" :key="k" :class="{ active: tab === k }" @click="tab = k">{{ l }}</button>
    </div>
    <button class="map-btn">На карте 📍</button>
  </div>

  <div class="layout">
    <section>
      <template v-for="g in groups" :key="g.items[0].sec">
        <h2 class="section-title">{{ g.cat }}</h2>
        <CourseCard v-for="c in g.items" :key="c.id" :course="c" />
      </template>
      <p v-if="!groups.length">Ничего не найдено</p>
    </section>
    <FiltersPanel />
  </div>
</template>
