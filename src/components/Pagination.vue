<template>
  <ul>
    <li>
      <button type="button">
        First
      </button>
    </li>

    <li>
      <button type="button">
        Previous
      </button>
    </li>

    <li>
      <button type="button">
        Next
      </button>
    </li>

    <li>
      <button type="button">
        Last
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    Buttons: {
      type: Number,
    },
    totalPages: {
      type: Number,
    },
    perPage: {
      type: Number,
    },
    currentPage: {
      type: Number,
    },
  },
  data() {
    return {};
  },
  methods: {
    startPage() {
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }
      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
  },
};
</script>