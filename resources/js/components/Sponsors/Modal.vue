<template>
    <div
        class="modal fade"
        id="view_sponsor"
        tabindex="-1"
        role="dialog"
        aria-labelledby="view_sponsor"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content" v-if="sponsor.hasOwnProperty('id')">
                <div class="modal-header">
                    <h5
                        class="modal-title text-capitalize"
                        id="view_sponsor"
                        v-text="`${sponsor.razao_social}`"
                    ></h5>
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        id="close-add-pattern"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div
                                class="col-md-12 d-flex flex-wrap justify-content-center align-items-center"
                            >
                                <span
                                    class="text-capitalize mx-3"
                                    v-text="
                                        `Razao Social: ${sponsor.razao_social}`
                                    "
                                ></span>
                                <span
                                    class="text-capitalize mx-3"
                                    v-text="
                                        `Nome Fantasia: ${sponsor.nome_fantasia}`
                                    "
                                ></span>
                                <span
                                    class="text-capitalize mx-3"
                                    v-text="`CNPJ: ${sponsor.cnpj}`"
                                ></span>
                                <span
                                    class="text-capitalize mx-3"
                                    v-text="
                                        `Categoria: ${sponsor.category.name}`
                                    "
                                ></span>
                                <span
                                    class="text-capitalize mx-3"
                                    v-text="`Projeto: ${sponsor.project.name}`"
                                ></span>
                                <span
                                    class="text-capitalize mx-3"
                                    v-text="
                                        `Area de Atuacao: ${sponsor.occupation_area}`
                                    "
                                ></span>
                                <span
                                    class="text-capitalize mx-3"
                                    v-text="
                                        `Responsavel Legal: ${sponsor.proxy.name}`
                                    "
                                ></span>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <div class="container-fluid">
                                    <div class="row border">
                                        <div class="col-md-12">
                                            <div class="h4">Endereço(s)</div>
                                        </div>
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div
                                                    class="col-md-12 d-flex flex-wrap justify-content-around align-itens-center border mt-2"
                                                    v-for="address in sponsor.addresses"
                                                    :key="address.id"
                                                >
                                                    <span
                                                        class="text-capitalize mx-1"
                                                        v-text="
                                                            `Tipo: ${address.name}`
                                                        "
                                                    ></span>
                                                    <span
                                                        class="text-capitalize mx-1"
                                                        v-text="
                                                            `País: ${address.country.name}`
                                                        "
                                                    ></span>
                                                    <span
                                                        class="text-capitalize mx-1"
                                                        v-text="
                                                            `CEP: ${address.zip_code}`
                                                        "
                                                    ></span>
                                                    <span
                                                        class="text-capitalize mx-1"
                                                        v-text="
                                                            `Logradouro: ${address.street}`
                                                        "
                                                    ></span>
                                                    <span
                                                        class="text-capitalize mx-1"
                                                        v-text="
                                                            `Número: ${address.number}`
                                                        "
                                                    ></span>
                                                    <span
                                                        class="text-capitalize mx-1"
                                                        v-text="
                                                            `Bairro: ${address.neighborhood}`
                                                        "
                                                    ></span>
                                                    <span
                                                        class="text-capitalize mx-1"
                                                        v-text="
                                                            `Complemento: ${address.additional_info}`
                                                        "
                                                    ></span>
                                                    <span
                                                        class="text-capitalize mx-1"
                                                        v-text="
                                                            `Cidade: ${address.city}`
                                                        "
                                                    ></span>
                                                    <span
                                                        class="text-capitalize mx-1"
                                                        v-html="
                                                            `Estado: <span class='text-uppercase'>${address.state}</span>`
                                                        "
                                                    ></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a
                        :href="`/sponsors/${sponsor.id}`"
                        class="btn btn-success"
                        data-toggle="tooltip"
                        data-placement="top"
                        :title="
                            `Visualizar ${sponsor.razao_social.toUpperCase()}`
                        "
                        ><i class="fas fa-glasses"></i
                    ></a>
                    <a
                        :href="`/sponsors/${sponsor.id}/edit`"
                        class="ml-2 btn btn-warning"
                        data-toggle="tooltip"
                        data-placement="top"
                        :title="`Editar ${sponsor.razao_social.toUpperCase()}`"
                        ><i class="far fa-edit"></i
                    ></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Form from "../../form-validation/Form";
export default {
    data() {
        return {
            sponsor: {},
        };
    },
    created() {
        window.events.$on("quick_view", (sponsor) => {
            this.sponsor = sponsor;
        });
    },
};
</script>
