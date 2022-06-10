/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';
import { Box, Select, VStack, AlertDialog, Skeleton, CheckIcon, Link, Input, FormControl, WarningOutlineIcon, ZStack, Heading, Badge, Spacer, Pressable, Flex, Button, AspectRatio, Image, Text, Center, HStack, Stack, Container } from "native-base";

const NativeBaseComponents = () => {
    const [password, setPassword] = useState('');
    const [service, setService] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = useRef(null);

    return isLoading ? (
        <Center w="100%">
            <VStack w='100%' borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
                borderColor: "coolGray.500"
            }} _light={{
                borderColor: "coolGray.200"
            }}>
                <Skeleton h="40" />
                <Skeleton.Text px="4" />
                <Skeleton.Text px="4" />
                <Skeleton.Text px="4" />
                <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
            </VStack>
        </Center>
    ) : (
        <ScrollView contentContainerStyle={styles.sectionContainer}>
            <Box alignItems="center">
                <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                }} _web={{
                    shadow: 2,
                    borderWidth: 0
                }} _light={{
                    backgroundColor: "gray.50"
                }}>
                    <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                            }} alt="image" />
                        </AspectRatio>
                        <Center bg="violet.500" _dark={{
                            bg: "violet.400"
                        }} _text={{
                            color: "warmGray.50",
                            fontWeight: "700",
                            fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            PHOTOS
                        </Center>
                    </Box>
                    <Stack p="4" space={3}>
                        <Stack space={2}>
                            <Heading size="md" ml="-1">
                                The Garden City
                            </Heading>
                            <Text fontSize="xs" _light={{
                                color: "violet.500"
                            }} _dark={{
                                color: "violet.400"
                            }} fontWeight="500" ml="-0.5" mt="-1">
                                The Silicon Valley of India.
                            </Text>
                        </Stack>
                        <Text fontWeight="400">
                            Bengaluru (also called Bangalore) is the center of India's high-tech
                            industry. The city is also known for its parks and nightlife.
                        </Text>
                        <HStack alignItems="center" space={4} justifyContent="space-between">
                            <HStack alignItems="center">
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }} fontWeight="400">
                                    6 mins ago
                                </Text>
                            </HStack>
                        </HStack>
                    </Stack>
                </Box>
            </Box>

            <Center bg="primary.400" marginY={5} _text={{
                color: "white",
                fontWeight: "bold",
            }} height="32" width="40" shadow={2}>
                Center
            </Center>

            <Box mb="32" mr="60">
                <ZStack mt="3" ml={-50}>
                    <Box bg="primary.700" size="20" rounded="lg" shadow={3} />
                    <Box bg="primary.500" mt="5" ml="5" size="20" rounded="lg" shadow={5} />
                    <Box bg="primary.300" mt="10" ml="10" size="20" rounded="lg" shadow={7} />
                    <Box bg="primary.200" mt="5" ml="60" size="20" rounded="lg" shadow={9} />
                    <Box bg="secondary.500" ml="80px" size="20" rounded="lg" shadow={9} />
                </ZStack>
            </Box>

            <Button onPress={() => {
                setIsLoading(true);
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            }}>Click Me</Button>

            <Link href="https://nativebase.io" isExternal>
                <Pressable
                    mt={5}
                >
                    {({
                        isHovered,
                        isFocused,
                        isPressed,
                    }) => {
                        return <Box borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
                            transform: [{
                                scale: isPressed ? 0.96 : 1
                            }]
                        }}>
                            <HStack alignItems="center">
                                <Badge colorScheme="darkBlue" _text={{
                                    color: "white"
                                }} variant="solid" rounded="4">
                                    Business
                                </Badge>
                                <Spacer />
                                <Text fontSize={10} color="coolGray.800">
                                    1 month ago
                                </Text>
                            </HStack>
                            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                                Marketing License
                            </Text>
                            <Text mt="2" fontSize="sm" color="coolGray.700">
                                Unlock powerfull time-saving tools for creating email delivery and
                                collecting marketing data
                            </Text>
                            <Flex>
                                {isFocused ? <Text mt="2" fontSize={12} fontWeight="medium" textDecorationLine="underline" color="darkBlue.600" alignSelf="flex-start">
                                    Read More
                                </Text> : <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                                    Read More
                                </Text>}
                            </Flex>
                        </Box>;
                    }}
                </Pressable>
            </Link>

            <Box w="100%">
                <FormControl isRequired isInvalid={password.length < 6}>
                    <Stack mx="2">
                        <FormControl.Label>Password</FormControl.Label>
                        <Input _light={{
                            bg: "coolGray.100"
                        }} _dark={{
                            bg: "coolGray.800"
                        }} _hover={{
                            bg: "coolGray.200"
                        }}
                            value={password}
                            onChangeText={value => setPassword(value)}
                            shadow={2} type="password" placeholder="password" />
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Atleast 6 characters are required.
                        </FormControl.ErrorMessage>
                    </Stack>
                </FormControl>
            </Box>

            <Box w="100%">
                <Select selectedValue={service} mx={1} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                }} mt={2} onValueChange={itemValue => setService(itemValue)}>
                    <Select.Item label="UX Research" value="ux" />
                    <Select.Item label="Web Development" value="web" />
                    <Select.Item label="Cross Platform Development" value="cross" />
                    <Select.Item label="UI Designing" value="ui" />
                    <Select.Item label="Backend Development" value="backend" />
                </Select>
            </Box>
            <Center>
                <Button shadow={2} mt={5} colorScheme='danger' onPress={() => setIsOpen(!isOpen)}>
                    Delete Customer
                </Button>
                <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                    <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>Delete Customer</AlertDialog.Header>
                        <AlertDialog.Body>
                            This will remove all data relating to Alex. This action cannot be
                            reversed. Deleted data can not be recovered.
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button.Group space={2}>
                                <Button variant='unstyled' colorScheme='coolGray' onPress={onClose} ref={cancelRef}>
                                    Cancel
                                </Button>
                                <Button colorScheme='danger' onPress={onClose}>
                                    Delete
                                </Button>
                            </Button.Group>
                        </AlertDialog.Footer>
                    </AlertDialog.Content>
                </AlertDialog>
            </Center>
        </ScrollView>
    );
};

export default NativeBaseComponents;
