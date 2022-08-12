import { Box, Text, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import GradientLayout from '../components/gradientLayout'
import { useMe } from '../lib/hooks'
import prisma from '../lib/prisma'

const Home = ({ artists }) => {
  const { user } = useMe()

  return (
    <GradientLayout
      roundImage
      color="gray"
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlists`}
      image="https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src="data:image/jpeg;base64,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"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  )
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props: { artists },
  }
}

export default Home
