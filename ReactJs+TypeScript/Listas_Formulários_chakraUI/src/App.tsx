import { Box, Button, Flex, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function App() {

  const [input, setInput] = useState(''); //lembrar do setTarefa

  function addTarefa(){
    setInput(input)
  }

  return (
    <Flex justify={'center'}>
      <VStack borderSpacing={4}>

        <Heading size={'2xl'} w={'full'}>Minha Lista</Heading>

        <Input 
          placeholder="Digite aqui..." 
          size={'xl'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></Input>

        <Button 
          color={'blue'} 
          size={"xl"}
          onClick={() => addTarefa()}
        >Enviar Tarefa</Button>

        <Box>{input}</Box>
      </VStack>
    </Flex>

  )
}

