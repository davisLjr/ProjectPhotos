import React, { useState } from "react";
//import emailjs from "@emailjs/browser";
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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";

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

  const handleSuccess = () => {
    setTimeout(function () {
      setIsSuccess(false);
    }, 500);
  };
  const onFormSubmit = (data) => {
    console.log("data", data);
    localStorage.setItem(`formData-${uuidv4()}`, JSON.stringify(data));
    handleSuccess();
  };
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
              onFormSubmit(data);
            })}
          >
            <Flex
              justifyContent="space-between"
              flexDirection={{ base: "column", md: "row" }}
            >
              <FormControl w={{ base: "100%", md: "45%" }} isRequired>
                <FormLabel color="lightGold">Nombre</FormLabel>
                <Input type="text" variant="outline" {...register("name")} />
                <Text sx={stylesError}>{errors.name?.message}</Text>
              </FormControl>

              <FormControl w={{ base: "100%", md: "45%" }} isRequired>
                <FormLabel color="lightGold" mt={{ base: "15px", md: "0px" }}>
                  Numero de celular
                </FormLabel>
                <Input type="number" variant="outline" {...register("phone")} />
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
                  <option value="option1" className="op">
                    Publicitaria
                  </option>
                  <option value="option2" className="op">
                    Retrato
                  </option>
                  <option value="option3" className="op">
                    Paisajes
                  </option>
                  <option value="option4" className="op">
                    Abstracta{" "}
                  </option>
                  <option value="option5" className="op">
                    Deportes{" "}
                  </option>
                  <option value="option6" className="op">
                    Stock{" "}
                  </option>
                  <option value="option7" className="op">
                    Alimentos
                  </option>
                  <option value="option8" className="op">
                    Cumpleaños
                  </option>
                  <option value="option9" className="op">
                    Bodas
                  </option>
                  <option value="option10" className="op">
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
              />
              <Text sx={stylesError}> {errors.message?.message}</Text>
            </FormControl>

            <Box mt="20px" mb="60px">
              <Button type="submit" variant="solidPrimary" fontFamily="heading">
                Enviar
              </Button>
            </Box>
          </form>
        </Box>
      ) : (
        <>
          <Box setIsSuccess={setIsSuccess}>listo</Box>
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
