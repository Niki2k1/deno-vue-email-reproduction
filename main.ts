import { config } from "@vue-email/compiler";
import "vue";

const vueEmail = config("./templates", {
  verbose: true,
});

const working = await vueEmail.render("working.vue");
console.log(working);

const failing = await vueEmail.render("failing.vue");
console.log(failing);
