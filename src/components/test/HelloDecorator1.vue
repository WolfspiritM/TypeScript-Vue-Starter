<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import HelloDecoratorComponent10 from "./HelloDecorator10.vue";
import HelloDecoratorComponent11 from "./HelloDecorator11.vue";
import HelloDecoratorComponent12 from "./HelloDecorator12.vue";
import HelloDecoratorComponent13 from "./HelloDecorator13.vue";
import HelloDecoratorComponent14 from "./HelloDecorator14.vue";
import HelloDecoratorComponent15 from "./HelloDecorator15.vue";
import HelloDecoratorComponent16 from "./HelloDecorator16.vue";
import HelloDecoratorComponent17 from "./HelloDecorator17.vue";
import HelloDecoratorComponent18 from "./HelloDecorator18.vue";
import HelloDecoratorComponent19 from "./HelloDecorator19.vue";
import HelloDecoratorComponent20 from "./HelloDecorator20.vue";


@Component({
    components: {
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
    },
})
export default class HelloDecorator extends Vue {
    @Prop() name!: string;
    @Prop() initialEnthusiasm!: number;

    enthusiasm = this.initialEnthusiasm;

    increment() {
        this.enthusiasm++;
    }
    decrement() {
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    }

    get exclamationMarks(): string {
        return Array(this.enthusiasm + 1).join('!');
    }
}
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>
