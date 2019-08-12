import Vue from "vue";
import {sortBy} from "lodash-es";

import HelloComponent from "./components/Hello.vue";
import HelloDecoratorComponent from "./components/test/HelloDecorator.vue";
import HelloDecoratorComponent1 from "./components/test/HelloDecorator1.vue";
import HelloDecoratorComponent2 from "./components/test/HelloDecorator2.vue";
import HelloDecoratorComponent3 from "./components/test/HelloDecorator3.vue";
import HelloDecoratorComponent4 from "./components/test/HelloDecorator4.vue";
import HelloDecoratorComponent5 from "./components/test/HelloDecorator5.vue";
import HelloDecoratorComponent6 from "./components/test/HelloDecorator6.vue";
import HelloDecoratorComponent7 from "./components/test/HelloDecorator7.vue";
import HelloDecoratorComponent8 from "./components/test/HelloDecorator8.vue";
import HelloDecoratorComponent9 from "./components/test/HelloDecorator9.vue";
import HelloDecoratorComponent10 from "./components/test/HelloDecorator10.vue";
import HelloDecoratorComponent11 from "./components/test/HelloDecorator11.vue";
import HelloDecoratorComponent12 from "./components/test/HelloDecorator12.vue";
import HelloDecoratorComponent13 from "./components/test/HelloDecorator13.vue";
import HelloDecoratorComponent14 from "./components/test/HelloDecorator14.vue";
import HelloDecoratorComponent15 from "./components/test/HelloDecorator15.vue";
import HelloDecoratorComponent16 from "./components/test/HelloDecorator16.vue";
import HelloDecoratorComponent17 from "./components/test/HelloDecorator17.vue";
import HelloDecoratorComponent18 from "./components/test/HelloDecorator18.vue";
import HelloDecoratorComponent19 from "./components/test/HelloDecorator19.vue";
import HelloDecoratorComponent20 from "./components/test/HelloDecorator20.vue";

console.log(sortBy);

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <h1>Hello Component</h1>
        <hello-component :name="name" :initialEnthusiasm="5" />
        <h1>Hello Decorator Component</h1>
        <hello-decorator-component :name="name" :initialEnthusiasm="5" />
        </div>
    `,
    data: { name: "World" },
    components: {
        HelloComponent,
        HelloDecoratorComponent,
        HelloDecoratorComponent1,
        HelloDecoratorComponent2,
        HelloDecoratorComponent3,
        HelloDecoratorComponent4,
        HelloDecoratorComponent5,
        HelloDecoratorComponent6,
        HelloDecoratorComponent7,
        HelloDecoratorComponent8,
        HelloDecoratorComponent9,
        HelloDecoratorComponent10,
        HelloDecoratorComponent11,
        HelloDecoratorComponent12,
        HelloDecoratorComponent13,
        HelloDecoratorComponent14,
        HelloDecoratorComponent15,
        HelloDecoratorComponent16,
        HelloDecoratorComponent17,
        HelloDecoratorComponent18,
        HelloDecoratorComponent19,
        HelloDecoratorComponent20,
    }
});
