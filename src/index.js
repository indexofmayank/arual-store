import React from "react";
import ReactDom from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { SidebarProvider } from './context/sidebar_context';

ReactDom.render(
  <SidebarProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </SidebarProvider>,
  document.getElementById('root')
);