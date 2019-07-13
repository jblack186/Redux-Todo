export const ADD_TODO = 'ADD_TODO'


export function addTodo(text){
       let newTodo = {
           todo: text,
           id: Date.now(),
           complete: false
       }
      return { type: ADD_TODO, payload: newTodo }
    }


// export function complete(id){
//     let done = {
        
//         complete: true
//     }
//     return { type: complete, payload: done }
// }


