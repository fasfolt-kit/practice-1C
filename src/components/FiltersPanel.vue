<script setup>
import { ref } from 'vue'
import { catalog } from '../data'

const open = ref(new Set(['Силовой спорт', 'Единоборства']))
const toggle = (n) => (open.value.has(n) ? open.value.delete(n) : open.value.add(n))
</script>

<template>
  <aside>
    <h2 class="section-title">Фильтры</h2>
    <div class="card filters">
      <label class="f-label">Возраст</label>
      <select class="select"><option>Любой</option><option>6–10 лет</option><option>10–18 лет</option></select>

      <label class="f-label">Пол</label>
      <div class="checks">
        <label><input type="checkbox" checked /> Мужской</label>
        <label><input type="checkbox" checked /> Женский</label>
      </div>

      <label class="f-label">Каталог</label>
      <ul class="catalog">
        <li v-for="c in catalog" :key="c.name">
          <button type="button" class="catalog__row" @click="toggle(c.name)">
            <span>{{ c.name }} <b v-if="c.count" class="cnt">{{ c.count }}</b></span>
            <span>{{ open.has(c.name) ? '⌃' : '⌄' }}</span>
          </button>
          <ul v-if="open.has(c.name) && c.children.length" class="catalog__sub">
            <li v-for="[n, k] in c.children" :key="n">• {{ n }} <b class="cnt">{{ k }}</b></li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>
