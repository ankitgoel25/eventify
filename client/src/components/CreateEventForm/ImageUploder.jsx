import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Flex, Center, useColorModeValue, Icon, Box } from '@chakra-ui/react';
import { AiFillFileAdd } from 'react-icons/ai';
import { MdClear } from 'react-icons/md';

const ImageUploader = ({ image, setImage }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (image === null) {
      setFiles([]);
    }
  }, [image]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    maxFiles: 1,
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) }),
        ),
      );
      setImage(acceptedFiles[0]);
    },
  });

  const dropText = isDragActive
    ? 'Drop the image here ...'
    : "Drag 'n' drop or click to browse files";

  const activeBg = useColorModeValue('gray.100', 'gray.600');
  const borderColor = useColorModeValue(
    isDragActive ? 'teal.300' : 'gray.300',
    isDragActive ? 'teal.500' : 'gray.500',
  );

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <Flex alignItems='center' justify='space-between'>
      <Center
        h={140}
        p={4}
        cursor='pointer'
        bg={isDragActive ? activeBg : 'transparent'}
        _hover={{ bg: activeBg }}
        transition='background-color 0.2s ease'
        borderRadius={4}
        border='3px dashed'
        borderColor={borderColor}
        {...getRootProps()}
        flexGrow='1'
      >
        <input {...getInputProps()} />
        <Icon as={AiFillFileAdd} mr={2} />
        <p>{dropText}</p>
      </Center>
      {files.length > 0 && (
        <Box
          flexShrink='0'
          position='relative'
          sx={{ '&:hover #remove-preview': { opacity: 1 } }}
          ml='6'
        >
          <Center
            id='remove-preview'
            position='absolute'
            top='0'
            left='0'
            w='full'
            h='full'
            opacity='0'
            bg='#00000075'
            cursor='pointer'
            onClick={() => setFiles([])}
          >
            <MdClear color='white' size={24} />
          </Center>
          <img
            width={90}
            height={90}
            src={files[0].preview}
            // Revoke data uri after image is loaded
            onLoad={() => URL.revokeObjectURL(files[0].preview)}
            alt='preview'
          />
        </Box>
      )}
    </Flex>
  );
};

export default ImageUploader;
