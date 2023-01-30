import * as ImagePicker from "expo-image-picker";

import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Card } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { styles } from "./styles";

const StartGame = ({ onHandleSetUser }) => {
  const [username, setUsername] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [isUser, setIsUser] = useState(true);

  useEffect(() => {
    username !== '' ? setIsUser(false) : setIsUser(true)
  }, [username])
  const imagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setUserImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Card style={styles.containerCard}>
        <View style={styles.inputUser}>
          <TouchableOpacity style={styles.userImage} onPress={imagePicker}>
            {userImage === null ? (
              <FontAwesomeIcon icon={faUser} size={20} />
            ) : (
              <Image
                source={{ uri: userImage }}
                alt="user"
                style={styles.imageSelected}
                resizeMode={"contain"}
              />
            )}
          </TouchableOpacity>
          <TextInput
            style={styles.userText}
            placeholder="username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.buttonStart}>
          <TouchableWithoutFeedback
            onPress={() => onHandleSetUser(username, userImage)}
            disabled={isUser}
          >
            <Text style={isUser ? styles.textOpacity : styles.text}>Start Game</Text>
          </TouchableWithoutFeedback>
        </View>
      </Card>
    </View>
  );
};

export default StartGame;
