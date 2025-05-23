import React from 'react';
import { Card, CardContent, Avatar, Typography, Box } from '@mui/material';
import manImg from '../assets/man.png';
import womenImg from '../assets/woman.png';
import { PersonalInfoData } from '../interfaces/Biodata.interface';
interface UserProfileProps {
  data: PersonalInfoData;
  biodataNo: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ data, biodataNo }) => {
  const isPerson = data.gender === 'Female';

  // Dynamically populate userProfile data
  const biodataDetails = [
    { id: 1, name: 'Gender', value: data.gender },
    { id: 2, name: 'Marital Status', value: data.maritalStatus },
    { id: 3, name: 'Birth Date', value: data.birthDate },
    { id: 4, name: 'Height', value: data.height },
    { id: 5, name: 'Complexion', value: data.complexion },
    { id: 6, name: 'Weight', value: data.weight },
    { id: 7, name: 'Blood Group', value: data.bloodGroup },
    { id: 8, name: 'Occupation', value: data.occupation },
    { id: 9, name: 'Religion', value: data.religion },
  ];

  return (
    <Card
      sx={{
        maxWidth: { xs: 350, sm: 850 },
        bgcolor: '#d0d3ff',
        border: '4px solid #652c8b',
        borderRadius: 6,
        m: 2,
        p: 3,
        maxHeight: { xs: 'auto', sm: 'auto' },
      }}
      className="w-full"
    >
      <Box
        display="flex"
        gap={2}
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          alignItems: {
            xs: 'center',
            sm: 'flex-start',
          },
        }}
      >
        {/* Avatar Section */}
        <Avatar
          src={isPerson ? womenImg : manImg}
          sx={{
            p: 1,
            border: '2px solid #652c8b',
            bgcolor: '#fffff2',
            '& .MuiSvgIcon-root': { color: '#E91E63' },
            width: { xs: 100, sm: 150 },
            height: { xs: 100, sm: 150 },
          }}
        />

        {/* Biodata Info Section */}
        <Box
          sx={{
            flex: 1,
            bgcolor: '#fffff2',
            borderRadius: 4,
            p: 1,
            width: { xs: '100%', sm: '50%' },
          }}
        >
          {/* Biodata Number */}
          <Box
            sx={{
              bgcolor: '#652c8b',
              color: 'white',
              borderRadius: 50,
              p: 2,
              mb: 1,
              textAlign: 'center',
              width: { xs: '100%', sm: '100%' },
            }}
          >
            <Typography sx={{ fontSize: '0.875rem', fontWeight: 'bold' }}>
              Biodata No : {biodataNo}
            </Typography>
          </Box>

          {/* Biodata Status */}
          <Box
            sx={{
              bgcolor: '#652c8b',
              color: 'white',
              borderRadius: 50,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '100%', sm: '100%' },
            }}
          >
            <Typography
              sx={{ fontSize: '0.875rem', fontWeight: 'bold', mx: 2 }}
            >
              Biodata Status :{' '}
            </Typography>
            <Box
              sx={{
                bgcolor: '#42d64c',
                px: 1,
                borderRadius: 50,
                fontSize: '0.875rem',
                fontWeight: 'bold',
              }}
            >
              {'Verified'}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Details Section */}
      <CardContent
        sx={{
          bgcolor: '#fffff2',
          borderRadius: 4,
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: 1,
            fontWeight: 'bold',
          }}
        >
          {biodataDetails.map(({ id, name, value }) => (
            <React.Fragment key={id}>
              <Typography
                sx={{
                  color: '#8e8e8e',
                  py: 0.5,
                  fontWeight: 'bold',
                }}
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  color: 'black',
                  py: 0.5,
                }}
              >
                : {value}
              </Typography>
            </React.Fragment>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
