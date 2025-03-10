import { Modal, 
    ModalOverlay, 
    ModalBody, 
    Button, 
    ModalContent, 
    ModalHeader,
    useDisclosure, 
    Flex, 
    FormControl, 
    FormLabel, 
    Input, 
    RadioGroup, 
    Radio,
    Textarea,
    ModalFooter 
} from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";


const CreateUserModal = () => {
  const {isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Button onClick={onOpen}>
        <BiAddToQueue />
    </Button>
    <Modal  isOpen={isOpen} onClose={onClose}>
       < ModalOverlay />
       <ModalContent>
        <ModalHeader> My new BFF </ModalHeader>
        <ModalBody pb={6}>
            <Flex alignItems={"center"} gap={4}>
                {/* left */}
                <FormControl>
                    <FormLabel>Full Name</FormLabel>
                    <Input placeholder='John Doe'/>
                </FormControl>
                {/*Right*/}
                <FormControl>
                    <FormLabel>Role</FormLabel>
                    <Input placeholder='Software Engineer'/>
                </FormControl>
                </Flex>
                
                <FormControl mt={4}>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                        resize={"none"}
                        overflow={"hidden"}
                        placeholder="He's a software engineer who loves to code and build things"
                    />
                </FormControl>

                <RadioGroup mt={4}>
                    <Flex gap={5}>
                        <Radio value='male'>Male</Radio>
                        <Radio value='female'>Female</Radio>
                    </Flex>
                </RadioGroup>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3}>
                        Add
                    </Button>
                    <Button onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
        </ModalBody>

       </ModalContent>
    </Modal>
    </>
  )
}

export default CreateUserModal