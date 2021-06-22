import React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type ProfileProps = {
  urlImage: string;
};

export function Avatar({ urlImage }: ProfileProps) {
  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary50, theme.colors.secondary70]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}
