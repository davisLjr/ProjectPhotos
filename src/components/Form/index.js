import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import {
  Box,
  FormControl,
  FormLabel,
  Text,
  Input,
  Button,
  Heading,
  Select,
  Flex,
  Textarea,
  useToast
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//import { v4 as uuidv4 } from "uuid";
import { Success } from "./components";

export const Mailer = () => {
  const schema = yup
    .object({
      name: yup.string().required("Este campo es requerido, rellenarlo"),
      email: yup.string().required("Este campo es requerido, rellenar email"),
      service: yup.string().required("Este campo es requerido, rellenarlo"),
      phone: yup.string().required("Este campo es requerido, rellenarlo"),
      message: yup.string().required("Este campo es requerido, rellenarlo"),
    })
    .required();

  const [isSuccess, setIsSuccess] = useState(true);
  const [isLoading, setIsLoading] = useState(false)

  const handleSuccess = () => {
    setIsLoading(false)
    setTimeout(function () {
      setIsSuccess(false);
    }, 800);
  };
  //const onFormSubmit = (data) => {
  //  console.log("data", data);
  //  localStorage.setItem(`formData-${uuidv4()}`, JSON.stringify(data));
  //  handleSuccess();
  //};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      service: "",
      phone: "",
      message: "",
    },
  });
  //console.log('errors', errors)
  const toast = useToast()

  const form = useRef();

  const sendEmail = (e) => {
    console.log('e', e)
    setIsLoading(true)
    emailjs.sendForm('service_u4ry8lv','template_xlstmwl',form.current,'lAbAT3byJtR9pXp5v')
    .then((result) => {
      console.log(result.text);
      toast({
        title: 'Consulta enviada',
        description: "tu consulta fue envida con exito, pronto estaran en contacto.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
      handleSuccess();
    }, (error) => {
      console.log(error.text);
      toast({
        title: 'No se pudo enviar tu consulta',
        description: "Hubo un error en el envio de formulario, intenta nuevamente.",
        status: 'error',
        duration: 800,
        isClosable: true,
      })
    });
  }
  //agregar maxlenght a los inpuut y tamaño de altura al textarea
//el toast  en lugar de colocarlo en el onclick de button es mejor colocarlo aca en el sendEmail para que cuando se empieza a enviar el evento muestra el cuadro de que si esta llenos los campos, luego si todo sale bien se activa handle success que da como el ok, entonces en ese trayecto de mientras se hace el handlesuccess, coloqué dentro del mismo un isloading antes de que se active el handlesuccess asi se ve que carga antes de que este ok, luego volviendo al send email , si llega a dar error colocamos el toast de error para que se muestre el cuadro rojo. 
  return (
    <>
      {isSuccess ? (
        <Box
          bg="grayf"
          p={{ base: "10px", md: "40px" }}
          sx={{
            ".formulario": {
              maxWidth: "1400px",
              margin: "auto",
            },
          }}
        >
          <Heading
            color="lightGold"
            textAlign="center"
            letterSpacing="2px"
            fontSize={{ base: "2xl", lg: "4xl" }}
            fontFamily="heading"
            mb="40px"
            mt="40px"
          >
            Contacto
          </Heading>
          <form
            className="formulario"
            onSubmit={handleSubmit((data) => {
              sendEmail(data);
            })}
            ref={form}
          >
            <Flex
              justifyContent="space-between"
              flexDirection={{ base: "column", md: "row" }}
            >
              <FormControl w={{ base: "100%", md: "45%" }} isRequired>
                <FormLabel color="lightGold">Nombre</FormLabel>
                <Input type="text" variant="outline" {...register("name")}
                />
                <Text sx={stylesError}>{errors.name?.message}</Text>
              </FormControl>

              <FormControl w={{ base: "100%", md: "45%" }} isRequired>
                <FormLabel color="lightGold" mt={{ base: "15px", md: "0px" }}>
                  Numero de celular
                </FormLabel>
                <Input type="number" variant="outline" {...register("phone")}/>
                <Text sx={stylesError}>{errors.phone?.message}</Text>
              </FormControl>
            </Flex>
            <Flex
              justifyContent="space-between"
              flexDirection={{ base: "column", md: "row" }}
            >
              <FormControl w={{ base: "100%", md: "45%" }} mt="20px" isRequired>
                <FormLabel color="lightGold">Email</FormLabel>
                <Input type="email" variant="outline" {...register("email")} />
                <Text sx={stylesError}>{errors.email?.message}</Text>
              </FormControl>

              <FormControl w={{ base: "100%", md: "45%" }} mt="20px" isRequired>
                <FormLabel color="lightGold">Tipo de Consulta</FormLabel>
                <Select sx={style} {...register("service")}>
                  <option value="Publicitaria" className="op">
                    Publicitaria
                  </option>
                  <option value="Retrato" className="op">
                    Retrato
                  </option>
                  <option value="Paisajes" className="op">
                    Paisajes
                  </option>
                  <option value="Abstracta" className="op">
                    Abstracta{" "}
                  </option>
                  <option value="Deportes" className="op">
                    Deportes{" "}
                  </option>
                  <option value="Stock" className="op">
                    Stock{" "}
                  </option>
                  <option value="Alimentos" className="op">
                    Alimentos
                  </option>
                  <option value="Cumpleaños" className="op">
                    Cumpleaños
                  </option>
                  <option value="Bodas" className="op">
                    Bodas
                  </option>
                  <option value="Eventos generales" className="op">
                    Eventos generales
                  </option>
                </Select>
                <Text sx={stylesError}>{errors.service?.message}</Text>
              </FormControl>
            </Flex>

            <FormControl mt="20px" isRequired>
              <FormLabel color="lightGold">Deja aca tu mensaje</FormLabel>
              <Textarea
                placeholder="Here is a sample placeholder"
                variant="outline"
                sx={style}
                {...register("message")}
                cols='60'
                rows='20'
              />
              <Text sx={stylesError}> {errors.message?.message}</Text>
            </FormControl>

            <Box mt="20px" mb="60px">
              <Button type="submit" variant="solidPrimary" fontFamily="heading" isLoading={isLoading}>
                Enviar
              </Button>
            </Box>
          </form>
        </Box>
      ) : (
        <>
          <Box bg="grayf"
            p={{ base: "10px", md: "40px" }} 
            h='400px' 
            display='flex'
            >
              <Success setIsSuccess={setIsSuccess}/>
          </Box>
        </>
      )}
    </>
  );
};

const style = {
  bg: "baseTransp",
  height: "50px",
  borderColor: "gold",
  _focus: {
    borderColor: "white",
    outline: "none",
  },
  placeholder: "Seleccion un Pais",
  fontFamily: "heading",
  color: "white",
  fontSize: "sm",
  _hover: {
    borderColor: "lightGold",
  },
  _focusVisible: {
    borderColor: "lightGold",
  },
  ".op": {
    color: "white",
    background: "base",
    height: "20px !important",
  },
};
const stylesError = {
  fontSize: "xs",
  color: "gold",
  letterSpacing: "0.80px",
};
