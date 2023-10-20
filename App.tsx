import { config } from '@gluestack-ui/config';
import { Box, Button, ButtonText, FormControl, FormControlLabel, GluestackUIProvider, Heading, Input, InputField, Text } from '@gluestack-ui/themed';
import { useState } from 'react';


export default function App() {
  const [Idade, setIdade] = useState("18")

  return (
    <GluestackUIProvider config={config}>
      <Box bg="$amber300" h={'$full'} justifyContent='center' alignItems='center'>
        <Heading>Maior ou Menor?</Heading>
        <FormControl w={'$full'} px={'$5'}>
          <FormControlLabel><Text>Idade</Text></FormControlLabel>
          <Input>
          <InputField placeholder='Exemplo: 18'/>
          </Input>
          <Button mt={'$2'}><ButtonText>Calcular</ButtonText></Button>
        </FormControl>

      <Text>Sofi</Text>
      </Box>
    </GluestackUIProvider>
  );
}



