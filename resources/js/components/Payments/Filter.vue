<template>
    <div class="row d-flex align-items-end">
        <div class="col-md-4">
            <div class="form-group bmd-form-group">
                <label for="search" class="bmd-label-floating">Busca</label>
                <input
                    type="text"
                    name="search"
                    id="search"
                    v-model="filters.search"
                    class="form-control"
                    @keyup="search"
                    autofocus
                />
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group bmd-form-group">
                <label for="paginate">Itens por página</label>
                <select
                    name="paginate"
                    id="paginate"
                    class="form-control"
                    v-model="filters.paginate"
                    @change="search"
                >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="all">Todos</option>
                </select>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group bmd-form-group">
                <label for="status">Categoria</label>
                <select
                    name="category"
                    id="category"
                    class="form-control text-capitalize"
                    v-model="filters.category"
                    @change="search"
                >
                    <option value="all">Todas</option>
                    <option
                        class="text-capitalize"
                        v-for="category in categories"
                        :value="category.name"
                        :key="category.id"
                        v-text="category.name"
                    ></option>
                </select>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            filters: {
                paginate: 10,
                search: "",
                category: "all",
            },
            categories: [],
        };
    },
    methods: {
        search: _.debounce(function() {
            window.events.$emit("search", this.filters);
        }, 350),
        fetch(entity, queryParams = "") {
            window.axios
                .get(`/${entity}?${queryParams}`)
                .then(({ data }) => {
                    this[entity] = data;
                })
                .catch((errors) => {
                    window.flash("Algo deu errado.", "danger");
                });
        },
    },
    created() {
        this.fetch("categories", "search=payment&status=1");
    },
};
</script>
