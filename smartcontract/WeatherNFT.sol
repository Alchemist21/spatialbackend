// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract ChainlinkWeatherNFT is ERC1155 {

    struct WeatherCondition {
        uint256 longtitude;
        uint256 latitude;
        uint256 weather;
    }

    mapping(uint256 => WeatherCondition) public weatherMap;

    uint256 public ID = 0;

    constructor() ERC1155("https://m4k4k2ffigli.usemoralis.com/{id}.json") {
       
    }

    function mint(uint256 longtitude, uint256 latitude, uint256 weather) public payable {
        weatherMap[ID].longtitude = longtitude;
        weatherMap[ID].latitude = latitude;
        weatherMap[ID].weather = weather;
        _mint(msg.sender, ID, 1, "");
        ID += 1;
    }
}