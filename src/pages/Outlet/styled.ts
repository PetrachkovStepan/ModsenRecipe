import styled from 'styled-components'

// Создаем стилизованную компоненту
// Присваиваем ей функцию styled.[название тега]
// Приписываем шаблонную строку и внутри пишем CSS стили
export const Container = styled.div`
  background-color: #2b2b2b;
  border-radius: 5px;
`

export const Title = styled.h1`
  font-weight: 300;
`
export const Text = styled.p`
  font-size: 12px
`