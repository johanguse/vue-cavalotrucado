<template>
  <section class="section">
    <h4>Estoque</h4>
    <div
      class="column is-one-quarter"
      v-for="(record, index) in records"
      :key="index">
      <div class="col-md-4">
        <h2>
          <a href="#">{{ record.nome_caminhao }}</a>
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        async asyncData({ app }) {
            const { records } = await app.$axios.$get(
                `http://127.0.0.1/api/cavalotrucado/read.php`
            );

            return { records };
        },
    };
</script>
