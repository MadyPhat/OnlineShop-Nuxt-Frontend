<template>
  <div class="main-content">
    <div class="section__content section__content--p30">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <loader></loader>
            <status-messages></status-messages>

            <BrandFilter v-on:Filtering="handleFiltering" v-on:createBrand="createBrand"></BrandFilter>

          </div>
          <div class="col-md-12">
            <!-- DATA TABLE-->
            <div class="table-responsive m-b-40">
              <table class="table table-borderless table-data3">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  <BrandRow v-if="brandList.data" v-for="brand of brandList.data" v-bind:brand="brand" v-bind:key="brand.id" v-on:removeBrand="removeBrand" v-on:editBrand="editBrand"></BrandRow>
                </tbody>
              </table>
            </div>
            <Pagination :data="brandList" v-if="brandList.data" v-on:handlePagination="handlePagination"></Pagination>
          </div>
        </div>
      </div>
    </div>
    <FormModal></FormModal>
  </div>
</template>

<script>
    import Loader from "../../components/helpers/loader";
    import statusMessages from "../../components/helpers/statusMessages";
    import BrandRow from "../../components/brand-components/BrandRow";
    import Pagination from "../../components/helpers/Pagination";
    import BrandFilter from "../../components/brand-components/BrandFilter";
    import FormModal from "../../components/brand-components/FormModal";

    export default {
        name: "index",
        middleware: "auth",
        components: {
          FormModal,
          BrandFilter,
          Pagination,
          BrandRow,
          Loader,
          statusMessages
        },
        fetch() {
            this.$store.dispatch('brand/listBrands');
        },
        computed: {
          brandList() {
            return this.$store.state.brand.brandList;
          }
        },
        methods: {
          handlePagination(page_number) {
            this.$store.commit('brand/setPage', page_number);

            this.$store.dispatch('brand/listBrands', this.getPayload());
          },
          handleFiltering(field, value) {
            this.$store.commit('brand/setFilterData', {key: field, val: value});
            this.$store.commit('brand/setPage', 1);

            this.$store.dispatch('brand/listBrands', this.getPayload());
          },
          getPayload() {
            let payload = {};
            for(let field in this.$store.state.brand.filterData) {
              if(this.$store.state.brand.filterData.hasOwnProperty(field) && this.$store.state.brand.filterData[field] !== '')
                payload[field] = this.$store.state.brand.filterData[field];
            }
            payload.page = this.$store.state.brand.page;

            return payload;
          },
          removeBrand(id) {
            if(confirm("Are you sure?")) {
              this.$store.dispatch('brand/deleteBrand', id);
            }
          },
          createBrand() {
            this.$store.commit('brand/resetBrand');
            // some jquery code
            $(".brand-form-modal").modal("show");
          },
          editBrand(id) {
            this.$store.dispatch('brand/showBrand', {id, onSuccess: () => $(".brand-form-modal").modal("show")});
          }
        }
    }
</script>

<style scoped>

</style>