import React,{useState} from 'react'
import {Box,Image,Button,RadioGroup,HStack,Radio,FormControl,Input,FormLabel,FormErrorMessage,FormHelperText, VStack, SimpleGrid, Heading, GridItem} from "@chakra-ui/react";
import MultiImageInput from 'react-multiple-image-input';


const  RoomDetails = (props) => {
    const [input, setInput] = useState('');
    const [files, setFiles] = useState([]);

   
    const handleInputChange = (e) => setInput(e.target.value)

    const onChange = e => {
        console.log(e.target.files);
        setFiles(e.target.files)
      };
      console.log(files);
      const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        Object.values(files).forEach(file=>{
          formData.append("uploadImages", file);
        });
    
        try {
            console.log("uploaded")
            console.log(files);
        //   const res = await axios.post('/api/upload', formData, {
        //     headers: {
        //       'Content-Type': 'multipart/form-data'
        //     },
        //   });
        //   console.log(res);
        } catch (err) {
          if (err.response.status === 500) {
            console.log(err);
          } else {
            console.log(err.response.data.msg);
          }
        }
      };
  
    const isError = input === ''
  
    return (



        <VStack>
          <Box width="40%">
            <VStack column={2} columnGap={3} rowGap={6} w="full">
                <Heading margin="20px"> Hotel Details</Heading>
            </VStack>
            <SimpleGrid column={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={1}>
                <FormControl>
                    <FormLabel>Hotel Name</FormLabel>
                    <Input
                    type="text"
                    placeholder="Enter Hotel Name"
                    />
                </FormControl>
                </GridItem>
                
                <GridItem colSpan={1}>
                <FormControl>
                    <FormLabel>Hotel Rating</FormLabel>
                    <Input
                    type="text"
                    placeholder="Enter Hotel Rating"
                    />
                </FormControl>
                </GridItem>

                <GridItem colSpan={1}>
                <FormControl>
                    <FormLabel>Locality</FormLabel>
                    <Input
                    type="text"
                    placeholder="Enter Hotel Locality"
                    />
                </FormControl>
                </GridItem>

                <GridItem colSpan={1}>
                <FormControl>
                    <FormLabel>State</FormLabel>
                    <Input
                    type="text"
                    placeholder="Enter State"
                    />
                </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                <FormControl>
                    <FormLabel>Country</FormLabel>
                    <Input
                    type="text"
                    placeholder="Enter Country"
                    />
                </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                <FormControl>
                    <FormLabel>Pincode</FormLabel>
                    <Input
                    type="text"
                    placeholder="Enter Pincode"
                    />
                </FormControl>
                </GridItem>
            </SimpleGrid>

            <VStack column={2} columnGap={3} rowGap={6} w="full">
                <Heading  margin="20px"> Ameneties</Heading>
            </VStack>

            <SimpleGrid column={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={2}>
                <FormControl as='fieldset'>
                    <RadioGroup defaultValue='Itachi'>
                        <HStack spacing='24px'>
                        <Radio value='ac'>AC</Radio>
                        <Radio value='pool'>Pool</Radio>
                        </HStack>
                    </RadioGroup>
                    </FormControl>
                </GridItem>
            <GridItem colSpan={2}>
                <FormControl>
                    <FormLabel>CheckIn Time</FormLabel>
                    <Input
                    type="text"
                    placeholder=""
                    />
                </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                <FormControl>
                    <FormLabel>Checkout Time</FormLabel>
                    <Input
                    type="text"
                    placeholder=""
                    />
                </FormControl>
                </GridItem>
            </SimpleGrid>
            <VStack column={2} columnGap={3} rowGap={6} w="full">
                <Heading  margin="20px"> Upload Image</Heading>
            </VStack>
             <input
            type='file'
            id='file'
            name="uploadImages"
            multiple
            onChange={onChange}
          />
</Box>

            <Button
           borderRadius="md"
           bg="cyan.600"
           _hover={{ bg: "cyan.200" }}
           variant="ghost"
           type="submit"
           marginBottom={8}
         >
           Upload
         </Button>
         
         <Button
           borderRadius="md"
           bg="cyan.600"
           _hover={{ bg: "cyan.200" }}
           variant="ghost"
           type="submit"
         >
           Submit
         </Button>
        </VStack>

)
}


 export default RoomDetails;

