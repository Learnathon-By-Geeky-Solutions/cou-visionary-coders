/** @format */

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Grid,
} from "@mui/material";

const PersonalInformation = () => {
  return (
    <Card sx={{ maxWidth: 800, mx: "auto", p: 2 }}>
      <CardHeader
        title={
          <Typography variant="h6" fontWeight="bold">
            Personal Information
          </Typography>
        }
      />
      <CardContent>
        <form>
          <Grid container spacing={3}>
            {/* Biodata Type */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Biodata Type"
                name="biodataType"
                id="biodataType"
                required
                defaultValue="">
                <MenuItem value="bride" sx={{ fontSize: "0.875rem" }}>
                  Male's Biodata
                </MenuItem>
                <MenuItem value="groom" sx={{ fontSize: "0.875rem" }}>
                  Female's Biodata
                </MenuItem>
              </TextField>
            </Grid>

            {/* Marital Status */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Marital Status"
                id="maritalStatus"
                name="maritalStatus"
                required
                defaultValue="">
                <MenuItem value="neverMarried" sx={{ fontSize: "0.875rem" }}>
                  Never Married
                </MenuItem>
                <MenuItem value="married" sx={{ fontSize: "0.875rem" }}>
                  Married
                </MenuItem>
                <MenuItem value="divorced" sx={{ fontSize: "0.875rem" }}>
                  Divorced
                </MenuItem>
              </TextField>
            </Grid>

            {/* Date of Birth */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                id="dob"
                type="date"
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            {/* Height */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Height"
                id="height"
                name="height"
                placeholder="Enter height"
                required>
                <MenuItem value="lessThan4Feet" sx={{ fontSize: "0.875rem" }}>
                  Less than 4 feet
                </MenuItem>
                <MenuItem value="4" sx={{ fontSize: "0.875rem" }}>
                  4'
                </MenuItem>
                <MenuItem value="4_1" sx={{ fontSize: "0.875rem" }}>
                  4' 1''
                </MenuItem>
                <MenuItem value="4_2" sx={{ fontSize: "0.875rem" }}>
                  4' 2''
                </MenuItem>
                <MenuItem value="4_3" sx={{ fontSize: "0.875rem" }}>
                  4' 3''
                </MenuItem>
                <MenuItem value="4_4" sx={{ fontSize: "0.875rem" }}>
                  4' 4''
                </MenuItem>
                <MenuItem value="4_5" sx={{ fontSize: "0.875rem" }}>
                  4' 5''
                </MenuItem>
                <MenuItem value="4_6" sx={{ fontSize: "0.875rem" }}>
                  4' 6''
                </MenuItem>
                <MenuItem value="4_7" sx={{ fontSize: "0.875rem" }}>
                  4' 7''
                </MenuItem>
                <MenuItem value="4_8" sx={{ fontSize: "0.875rem" }}>
                  4' 8''
                </MenuItem>
                <MenuItem value="4_9" sx={{ fontSize: "0.875rem" }}>
                  4' 9''
                </MenuItem>
                <MenuItem value="4_10" sx={{ fontSize: "0.875rem" }}>
                  4' 10''
                </MenuItem>
                <MenuItem value="4_11" sx={{ fontSize: "0.875rem" }}>
                  4' 11''
                </MenuItem>
                <MenuItem value="5" sx={{ fontSize: "0.875rem" }}>
                  5'
                </MenuItem>
                <MenuItem value="5_1" sx={{ fontSize: "0.875rem" }}>
                  5' 1''
                </MenuItem>
                <MenuItem value="5_2" sx={{ fontSize: "0.875rem" }}>
                  5' 2''
                </MenuItem>
                <MenuItem value="5_3" sx={{ fontSize: "0.875rem" }}>
                  5' 3''
                </MenuItem>
                <MenuItem value="5_4" sx={{ fontSize: "0.875rem" }}>
                  5' 4''
                </MenuItem>
                <MenuItem value="5_5" sx={{ fontSize: "0.875rem" }}>
                  5' 5''
                </MenuItem>
                <MenuItem value="5_6" sx={{ fontSize: "0.875rem" }}>
                  5' 6''
                </MenuItem>
                <MenuItem value="5_7" sx={{ fontSize: "0.875rem" }}>
                  5' 7''
                </MenuItem>
                <MenuItem value="5_8" sx={{ fontSize: "0.875rem" }}>
                  5' 8''
                </MenuItem>
                <MenuItem value="5_9" sx={{ fontSize: "0.875rem" }}>
                  5' 9''
                </MenuItem>
                <MenuItem value="5_10" sx={{ fontSize: "0.875rem" }}>
                  5' 10''
                </MenuItem>
                <MenuItem value="5_11" sx={{ fontSize: "0.875rem" }}>
                  5' 11''
                </MenuItem>
                <MenuItem value="6" sx={{ fontSize: "0.875rem" }}>
                  6'
                </MenuItem>
                <MenuItem value="6_1" sx={{ fontSize: "0.875rem" }}>
                  6' 1''
                </MenuItem>
                <MenuItem value="6_2" sx={{ fontSize: "0.875rem" }}>
                  6' 2''
                </MenuItem>
                <MenuItem value="6_3" sx={{ fontSize: "0.875rem" }}>
                  6' 3''
                </MenuItem>
                <MenuItem value="6_4" sx={{ fontSize: "0.875rem" }}>
                  6' 4''
                </MenuItem>
                <MenuItem value="6_5" sx={{ fontSize: "0.875rem" }}>
                  6' 5''
                </MenuItem>
                <MenuItem value="6_6" sx={{ fontSize: "0.875rem" }}>
                  6' 6''
                </MenuItem>
                <MenuItem value="6_7" sx={{ fontSize: "0.875rem" }}>
                  6' 7''
                </MenuItem>
                <MenuItem value="6_8" sx={{ fontSize: "0.875rem" }}>
                  6' 8''
                </MenuItem>
                <MenuItem value="6_9" sx={{ fontSize: "0.875rem" }}>
                  6' 9''
                </MenuItem>
                <MenuItem value="6_10" sx={{ fontSize: "0.875rem" }}>
                  6' 10''
                </MenuItem>
                <MenuItem value="6_11" sx={{ fontSize: "0.875rem" }}>
                  6' 11''
                </MenuItem>
                <MenuItem value="moreThan7Feet" sx={{ fontSize: "0.875rem" }}>
                  More than 7 feet
                </MenuItem>
              </TextField>
            </Grid>

            {/* Weight */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Weight (kg)"
                id="weight"
                name="weight"
                type="number"
                placeholder="Enter weight"
                required
              />
            </Grid>

            {/* Complexion */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Complexion"
                id="complexion"
                name="complexion"
                required
                defaultValue="">
                <MenuItem value="black" sx={{ fontSize: "0.875rem" }}>
                  Black
                </MenuItem>
                <MenuItem value="brown" sx={{ fontSize: "0.875rem" }}>
                  Brown
                </MenuItem>
                <MenuItem value="lightBrown" sx={{ fontSize: "0.875rem" }}>
                  Light Brown
                </MenuItem>
                <MenuItem value="fair" sx={{ fontSize: "0.875rem" }}>
                  Fair
                </MenuItem>
                <MenuItem value="veryFair" sx={{ fontSize: "0.875rem" }}>
                  Very Fair
                </MenuItem>
              </TextField>
            </Grid>

            {/* Blood Group */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Blood Group"
                id="bloodGroup"
                name="bloodGroup"
                required
                defaultValue="">
                <MenuItem value="A+" sx={{ fontSize: "0.875rem" }}>
                  A+
                </MenuItem>
                <MenuItem value="A-" sx={{ fontSize: "0.875rem" }}>
                  A-
                </MenuItem>
                <MenuItem value="B+" sx={{ fontSize: "0.875rem" }}>
                  B+
                </MenuItem>
                <MenuItem value="B-" sx={{ fontSize: "0.875rem" }}>
                  B-
                </MenuItem>
                <MenuItem value="O+" sx={{ fontSize: "0.875rem" }}>
                  O+
                </MenuItem>
                <MenuItem value="O-" sx={{ fontSize: "0.875rem" }}>
                  O-
                </MenuItem>
                <MenuItem value="AB+" sx={{ fontSize: "0.875rem" }}>
                  AB+
                </MenuItem>
                <MenuItem value="AB-" sx={{ fontSize: "0.875rem" }}>
                  AB-
                </MenuItem>
              </TextField>
            </Grid>

            {/* Session */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Session"
                id="session"
                name="session"
                placeholder="Enter session"
                required
              />
            </Grid>

            {/* Department */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Department"
                id="department"
                name="department"
                placeholder="Enter department"
                required
              />
            </Grid>

            {/* Nationality */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Nationality"
                id="nationality"
                name="nationality"
                placeholder="Enter nationality"
                required>
                <MenuItem value="bangladeshi" sx={{ fontSize: "0.875rem" }}>
                  Bangladeshi
                </MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default PersonalInformation;
