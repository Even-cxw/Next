"use client"
import './global.css'
import StyledComponentsRegistry from '../lib/AntdRegistry';
import store from '@/store';
import { Provider } from "react-redux";

export default function Layout(props: { children: React.ReactNode, modal: React.ReactNode }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Provider store={store}>
            {props.children}
            {props.modal}
          </Provider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
