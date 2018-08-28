
import loading from './loading.vue' // 导入组件
const plagin = {
    install(Vue, options) {
        Vue.component(loading.name, loading) // vuePayKeyboard.name 组件的name属性
        // 类似通过 this.$xxx 方式调用插件的 其实只是挂载到原型上而已
        // Vue.prototype.$xxx  // 最终可以在任何地方通过 this.$xxx 调用
        // 虽然没有明确规定用$开头  但是大家都默认遵守这个规定
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(loading);
}
export default plagin // 导出..


// let $vm;

// export default {
//     install(Vue, options) {
//         if (!$vm) {
//             const LoadingPlugin = Vue.extend(LoadingComponent);

//             $vm = new LoadingPlugin({
//                 el: document.createElement('div')
//             });

//             document.body.appendChild($vm.$el);
//         }

//         $vm.show = false;

//         let loading = {
//             show(text) {
//                 $vm.show = true;

//                 $vm.text = text;
//             },
//             hide() {
//                 $vm.show = false;
//             }
//         };

//         if (!Vue.$loading) {
//             Vue.$loading = loading;
//         }

//         // Vue.prototype.$loading = Vue.$loading;

//         Vue.mixin({
//             created() {
//                 this.$loading = Vue.$loading;
//             }
//         })
//     }
// }

