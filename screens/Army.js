import React, { Component } from "react";
import {
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import * as Icon from "@expo/vector-icons";

import { Button, Divider, Input, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

class Product extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button onPress={() => {}}>
          <Icon.Entypo name="dots-three-horizontal" color={theme.colors.gray} />
        </Button>
      )
    };
  };

  renderGallery() {
    const { product } = this.props;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={product.images}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => (
          <Image
            source={require('../assets/images/army1.jpg')}
            resizeMode="contain"
            style={{ width, height: height / 2.8 }}
          />
        )}
      />
    );
  }

  render() {
    const { product } = this.props;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.renderGallery()}

        <Block style={styles.product}>
          <Text h2 bold>
          Jordanian Armed Forces
          </Text>
          
          <Text gray light height={22}>
          The Jordanian Armed Forces (JAF) (Arabic: القوات المسلحة الأردنية‎, Al-Quwat Al-Musallaha Al-Urduniyya), also referred to as the Arab Army (Arabic: الجيش العربي‎, Al-Jaysh Al-Arabi), are the military forces of the Hashemite Kingdom of Jordan. They consist of the ground forces, air force, and navy and is under the direct control of the King of Jordan who is the Supreme Commander of the Jordanian Armed Forces. The current Chairman of the Joint Chiefs of Staff is Major General Yousef Huneiti, who is also the King's military adviser.[1]

The first organized army in Jordan was established on 22 October 1920, and was named the "Mobile Force". At the time it only had 150 men in its ranks. On its third anniversary in 1923, the force was renamed the Arab Legion, consisting of 1,000 men. By the time Jordan became an independent state in 1946, the Arab Legion numbered some 8,000 soldiers in 3 mechanized regiments. In 1956, King Hussein dismissed all British generals and changed the name of the Legion into the "Jordanian Arab Army" in what became known as the Arabization of the Jordanian Army command.

The army fought in several wars and battles, mostly against Israel. In the 1948 Arab–Israeli War, the capture of the West Bank by Jordan and the decisive Battles of Latrun, proved that the Arab Legion was the most effective army during the war. Several confrontations followed with Israel, resulting in mixed success; they included the Retribution operations, the Six-Day War, the War of Attrition and Yom Kippur War. Jordan also had to face the PLO and the Syrian Army during the events of Black September. The signing of the Israel–Jordan peace treaty in 1994 ended the state of belligerency between the two countries.[2]

It is today considered to be among the most professional in the region, and is seen as particularly well-trained, organized, and equipped.
   -From Wikipedia-
          </Text>

          <Divider margin={[theme.sizes.padding * 0.9, 0]} />
          <Text h2 bold >
          Jordanian Armed Forces VS Corona Virus
          </Text>
          <Text gray light height={22}>
          The Jordanian Armed Forces (JAF) (Arabic: القوات المسلحة الأردنية‎, Al-Quwat Al-Musallaha Al-Urduniyya), also referred to as the Arab Army (Arabic: الجيش العربي‎, Al-Jaysh Al-Arabi), are the military forces of the Hashemite Kingdom of Jordan. They consist of the ground forces, air force, and navy and is under the direct control of the King of Jordan who is the Supreme Commander of the Jordanian Armed Forces. The current Chairman of the Joint Chiefs of Staff is Major General Yousef Huneiti, who is also the King's military adviser.[1]

The first organized army in Jordan was established on 22 October 1920, and was named the "Mobile Force". At the time it only had 150 men in its ranks. On its third anniversary in 1923, the force was renamed the Arab Legion, consisting of 1,000 men. By the time Jordan became an independent state in 1946, the Arab Legion numbered some 8,000 soldiers in 3 mechanized regiments. In 1956, King Hussein dismissed all British generals and changed the name of the Legion into the "Jordanian Arab Army" in what became known as the Arabization of the Jordanian Army command.

The army fought in several wars and battles, mostly against Israel. In the 1948 Arab–Israeli War, the capture of the West Bank by Jordan and the decisive Battles of Latrun, proved that the Arab Legion was the most effective army during the war. Several confrontations followed with Israel, resulting in mixed success; they included the Retribution operations, the Six-Day War, the War of Attrition and Yom Kippur War. Jordan also had to face the PLO and the Syrian Army during the events of Black September. The signing of the Israel–Jordan peace treaty in 1994 ended the state of belligerency between the two countries.[2]

It is today considered to be among the most professional in the region, and is seen as particularly well-trained, organized, and equipped.
   -From Wikipedia-
          </Text>
        </Block>
      </ScrollView>
    );
  }
}

Product.defaultProps = {
  product: mocks.products[0]
};

export default Product;

const styles = StyleSheet.create({
  product: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding
  },
  tag: {
    borderColor: theme.colors.gray2,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 2.5,
    marginRight: theme.sizes.base * 0.625
  },
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: theme.sizes.base
  },
  more: {
    width: 55,
    height: 55
  }
});