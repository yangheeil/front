import{c as o,h as n}from"./render.c7f7b015.js";import{a as u,u as d}from"./use-form.cb6acc90.js";import{c as i,h as l,g as c,e as m,U as g}from"./index.73a28f89.js";var v=o({name:"QList",props:{...u,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const t=c(),r=d(e,t.proxy.$q),s=i(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>l(e.tag,{class:s.value},n(a.default))}});function k(){return m(g)}export{v as Q,k as u};