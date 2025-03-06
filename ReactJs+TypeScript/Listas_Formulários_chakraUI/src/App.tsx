import { Box, Button, Flex, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function App() {

  const [input, setInput] = useState(''); 
  const [tarefa, setTarefa] = useState<string[]>([])

  function addTarefa(){
    setTarefa(tarefas => [...tarefas, input])
    setInput('')
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

        {tarefa.map((item) => (
          <Box key={item}>
            <Text>
              {item}
            </Text>
          </Box>
        ))}
      </VStack>
    </Flex>

  )
}

