
window.onload = function() {
  if(window.location.href == "https://www.binance.com/vn/my/wallet/account/main"){
    setTimeout(() => {
      var wb = document.getElementsByClassName("css-vfjd93")
      var wb1 = document.getElementsByClassName("css-vrzzoa")
      var wb2 = document.getElementsByClassName("css-12vhwpl")
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
      wb[0].innerHTML = "114.8812232"
      wb1[0].innerHTML = "≈ $" + "1,057,444.89756"
      wb2[7].innerHTML = "103.46782304"
      wb2[8].innerHTML = "103.46782304"
      wb2[10].innerHTML = "103.46782304"
      wb2[13].innerHTML = "388.47389112"
      wb2[14].innerHTML = "388.47389112"
      wb2[16].innerHTML = "10.11119843"
      wb2[19].innerHTML = "103,800.2474"
      wb2[20].innerHTML = "103,800.2474"
      wb2[22].innerHTML = "11.27689907"
      wb2[25].innerHTML = "1,256.4489"
      wb2[26].innerHTML = "1,256.4489"
      wb2[28].innerHTML = "0.13650109"
      var sld = document.getElementsByClassName("css-1uzu5bt")
      var sld1 = document.getElementsByClassName("css-1gyl5fa")
      var sld2 = document.getElementsByClassName("css-7na0c2")
      setTimeout(()=>{
        sld1[0].onclick = function(){
          setTimeout(() => {
            var wb = document.getElementsByClassName("css-oewxpj")
            wb[0].innerHTML = "103.46782304 BTC"
            wb[2].innerHTML = "103.46782304 BTC"
          }, 2500)
        }
        sld2[0].onclick = function(){
          setTimeout(() => {
            var wb = document.getElementsByClassName("css-oewxpj")
            wb[0].innerHTML = "103.46782304 BTC"
            wb[2].innerHTML = "103.46782304 BTC"
          }, 2500)
        }
        sld[0].onclick = function(){
          setTimeout(() => {
            var wb = document.getElementsByClassName("css-oewxpj")
            wb[0].innerHTML = "103.46782304 BTC"
            wb[2].innerHTML = "103.46782304 BTC"
          }, 2500)
        }
        sld[1].onclick = function(){
          setTimeout(() => {
            var wb = document.getElementsByClassName("css-oewxpj")
            wb[0].innerHTML = "103.46782304 BTC"
            wb[2].innerHTML = "103.46782304 BTC"
          }, 2500)
        }
        sld[2].onclick = function(){
          setTimeout(() => {
            var wb = document.getElementsByClassName("css-oewxpj")
            wb[0].innerHTML = "388.47389112 ETH"
            wb[2].innerHTML = "388.47389112 ETH"
          }, 2500)
        }
        sld[3].onclick = function(){
          setTimeout(() => {
            var wb = document.getElementsByClassName("css-oewxpj")
            wb[0].innerHTML = "388.47389112 ETH"
            wb[2].innerHTML = "388.47389112 ETH"
          }, 2500)
        }
        sld[4].onclick = function(){
          setTimeout(() => {
            var wb = document.getElementsByClassName("css-oewxpj")
            wb[0].innerHTML = "103,800.2474 USDT"
            wb[2].innerHTML = "103,800.2474 USDT"
          }, 2500)
        }
        sld[5].onclick = function(){
          setTimeout(() => {
            var wb = document.getElementsByClassName("css-oewxpj")
            wb[0].innerHTML = "103,800.2474 USDT"
            wb[2].innerHTML = "103,800.2474 USDT"
          }, 2500)
        }
        sld[6].onclick = function(){
          setTimeout(() => {
            var wb = document.getElementsByClassName("css-oewxpj")
            wb[0].innerHTML = "1,256.4489 BNB"
            wb[2].innerHTML = "1,256.4489 BNB"
          }, 2500)
        }
        sld[7].onclick = function(){
          setTimeout(() => {
            var wb = document.getElementsByClassName("css-oewxpj")
            wb[0].innerHTML = "1,256.4489 BNB"
            wb[2].innerHTML = "1,256.4489 BNB"
          }, 2500)
        }
      },1000)
      var wb3 = document.getElementsByClassName("css-10j588g")

      wb3[0].onclick = function(){
        setTimeout(() => {
              var tb = document.getElementsByClassName("css-mjtoek")
              var tb1 = document.getElementsByClassName("css-gm1uqh")
              var tb2 = document.getElementsByClassName("css-w6vv8o")
              tb[0].innerHTML = "114.8812232"
              tb2[0].innerHTML = "114.8812232"
              tb1[0].innerHTML = "≈ ₫24,633,522,429.6"
        }, 2000)
      }
      wb3[9].onclick = function(){
        setTimeout(() => {
          var del = document.getElementsByClassName("css-19vctv4")
          del[0].remove()
          function newHistory(time, symbol, address, amount){
            var x1 = document.createElement("div")
            x1.dataset.type = "table-td"
            x1.classList.add("css-vurnku")
            var x2 = document.createElement("div")
            x2.classList.add("css-1qyk0y6")
            var x3 = document.createElement("div")
            x1.dataset.type = "table-min-row"
            x3.classList.add("css-12vhwpl")
            x3.setAttribute("style", "flex: 160 1 0%; min-width: 160px;")
            x3.append(`${time.toISOString().split("T")[0] + " " + (time.toISOString().split("T")[1]).slice(0,8)}`)
            
            var x4 = document.createElement("div")
            x4.dataset.type = "table-min-row"
            x4.classList.add("css-12vhwpl")
            x4.setAttribute("style","flex: 50 1 0%; min-width: 50px;")
            x4.append(symbol)
            
            var x5 = document.createElement("div")
            x5.dataset.type = "table-min-row"
            x5.classList.add("css-12vhwpl")
            x5.setAttribute("style","flex: 120 1 0%; min-width: 120px;")

            var x6 = document.createElement("div")
            x6.dataset.bnType = "text"
            x6.classList.add("css-1r5j6bd")
            x6.setAttribute("style","overflow: hidden; -webkit-line-clamp: 1;")
            x6.append(amount)
            x5.appendChild(x6)

            var x7 = document.createElement("div")
            x7.dataset.type = "table-min-row"
            x7.classList.add("css-12vhwpl")
            x7.setAttribute("style","flex: 140 1 0%; min-width: 140px;")

            var x8 = document.createElement("div")
            x8.classList.add("css-29mduf")
            x8.append("Completed")
            x7.appendChild(x8)

            var x9 = document.createElement("div")
            x9.dataset.type = "table-min-row"
            x9.classList.add("css-12vhwpl")
            x9.setAttribute("style","flex: 500 1 0%; min-width: 500px;")

            var x10 = document.createElement("div")
            x10.classList.add("css-1pysja1")
            var x11 = document.createElement("div")
            x11.classList.add("css-y179pd")
            x11.setAttribute("style","display: flex")
            var x12 = document.createElement("div")
            x12.dataset.bnType = "text"
            x12.classList.add("css-1pwrfnn")
            x12.setAttribute("style","width: 85px;")
            x12.append("Địa chỉ:")
            var x13 = document.createElement("div")
            x13.classList.add("css-1h690ep")
            var x14 = document.createElement("a")
            x14.classList.add("css-16wohqq")
            x14.dataset.bnType = "link"
            if(symbol == "BTC"){
            x14.setAttribute("href", `https://www.blockchain.com/btc/address/${address}`)
            }
            if(symbol == "ETH" || symbol == "USDT"){
            x14.setAttribute("href", `https://etherscan.io/address/${address}`)
            }
            x14.setAttribute("target", "_blank")
            x14.setAttribute("rel", "noopener noreferrer")
            var x15 = document.createElement("div")
            x15.classList.add("css-1r5j6bd")
            x15.dataset.bnType = "text"
            x15.setAttribute("style", "overflow: hidden; -webkit-line-clamp: 1; color: black;")
            x15.setAttribute("title", address)
            x15.append(address)

            x14.appendChild(x15)
            x13.appendChild(x14)
            x11.appendChild(x12)
            x11.appendChild(x13)
            x10.appendChild(x11)
            x9.appendChild(x10)
            
            var x16 = document.createElement("div")
            x16.dataset.type = "table-min-row"
            x16.dataset.sticky = "right"
            x16.classList.add("css-12vhwpl")
            x16.setAttribute("style","flex: 30 1 0%; min-width: 30px; position: sticky; right: 0px;")
            var x17 = document.createElement("div")
            x17.classList.add("css-2omdsi")
            var x18 = document.createElement("div")
            x18.classList.add("css-vurnku")
            var x19 = document.createElementNS("http://www.w3.org/2000/svg", "svg")
            x19.setAttributeNS(null, "viewBox","0 0 24 24")
            x19.classList.add("css-1yz0bro")

            var x20 = document.createElementNS("http://www.w3.org/2000/svg", "path")
            x20.setAttributeNS(null,"d","M16 9v1.2L12 15l-4-4.8V9h8z")
            x20.setAttributeNS(null,"fill","icon")
            x19.appendChild(x20)
            x17.appendChild(x18)
            x17.appendChild(x19)
            x16.appendChild(x17)
            
            x2.appendChild(x3)
            x2.appendChild(x4)
            x2.appendChild(x5)
            x2.appendChild(x7)
            x2.appendChild(x9)
            x2.appendChild(x16)
            x1.appendChild(x2)
            return x1
          }
          var b = newHistory(new Date(Date.now() - 24*60*60*1000 - 87*60*1000 - 76*1000), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 10.32424)
          var b1 = newHistory((new Date(Date.now() - 3*24*60*60*1000 - 90*60*1000 - 23*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "15,087.25")
          var b2 = newHistory((new Date(Date.now() - 7*24*60*60*1000 - 42*60*1000 - 35*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 300.45564)
          var b3 = newHistory((new Date(Date.now() - 8*24*60*60*1000 - 56*60*1000 - 21*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 89.7344)
          var b4 = newHistory((new Date(Date.now() - 10*24*60*60*1000 - 81*60*1000 - 58*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "10,465.09")
          var b5 = newHistory((new Date(Date.now() - 13*24*60*60*1000 - 36*60*1000 - 93*1000)), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 21.87686)
          var b6 = newHistory((new Date(Date.now() - 18*24*60*60*1000 - 51*60*1000 - 14*1000)), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 4.324289)
          var b7 = newHistory((new Date(Date.now() - 20*24*60*60*1000 - 71*60*1000 - 88*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "26,094.5")
          var b8 = newHistory((new Date(Date.now() - 24*24*60*60*1000 - 15*60*1000 - 37*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 64.12837)
          var b9 = newHistory((new Date(Date.now() - 26*24*60*60*1000 - 41*60*1000 - 46*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "8,600.15")
          var b10 = newHistory((new Date(Date.now() - 27*24*60*60*1000 - 39*60*1000 - 83*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "17,500.32")
              
            var sld = document.getElementsByClassName("css-5lba6l")
            sld[0].append(b)
            sld[0].append(b1)
            sld[0].append(b2)
            sld[0].append(b3)
            sld[0].append(b4)
            sld[0].append(b5)
            sld[0].append(b6)
            sld[0].append(b7)
            sld[0].append(b8)
            sld[0].append(b9)
            sld[0].append(b10)
        }, 2000)
      }
      wb3[9].onclick = function(){
        setTimeout(() => {
          var del = document.getElementsByClassName("css-19vctv4")
          del[0].remove()
          function newHistory(time, symbol, address, amount){
            var x1 = document.createElement("div")
            x1.dataset.type = "table-td"
            x1.classList.add("css-vurnku")
            var x2 = document.createElement("div")
            x2.classList.add("css-1qyk0y6")
            var x3 = document.createElement("div")
            x1.dataset.type = "table-min-row"
            x3.classList.add("css-12vhwpl")
            x3.setAttribute("style", "flex: 160 1 0%; min-width: 160px;")
            x3.append(`${time.toISOString().split("T")[0] + " " + (time.toISOString().split("T")[1]).slice(0,8)}`)
            
            var x4 = document.createElement("div")
            x4.dataset.type = "table-min-row"
            x4.classList.add("css-12vhwpl")
            x4.setAttribute("style","flex: 50 1 0%; min-width: 50px;")
            x4.append(symbol)
            
            var x5 = document.createElement("div")
            x5.dataset.type = "table-min-row"
            x5.classList.add("css-12vhwpl")
            x5.setAttribute("style","flex: 120 1 0%; min-width: 120px;")

            var x6 = document.createElement("div")
            x6.dataset.bnType = "text"
            x6.classList.add("css-1r5j6bd")
            x6.setAttribute("style","overflow: hidden; -webkit-line-clamp: 1;")
            x6.append(amount)
            x5.appendChild(x6)

            var x7 = document.createElement("div")
            x7.dataset.type = "table-min-row"
            x7.classList.add("css-12vhwpl")
            x7.setAttribute("style","flex: 140 1 0%; min-width: 140px;")

            var x8 = document.createElement("div")
            x8.classList.add("css-29mduf")
            x8.append("Completed")
            x7.appendChild(x8)

            var x9 = document.createElement("div")
            x9.dataset.type = "table-min-row"
            x9.classList.add("css-12vhwpl")
            x9.setAttribute("style","flex: 500 1 0%; min-width: 500px;")

            var x10 = document.createElement("div")
            x10.classList.add("css-1pysja1")
            var x11 = document.createElement("div")
            x11.classList.add("css-y179pd")
            x11.setAttribute("style","display: flex")
            var x12 = document.createElement("div")
            x12.dataset.bnType = "text"
            x12.classList.add("css-1pwrfnn")
            x12.setAttribute("style","width: 85px;")
            x12.append("Địa chỉ:")
            var x13 = document.createElement("div")
            x13.classList.add("css-1h690ep")
            var x14 = document.createElement("a")
            x14.classList.add("css-16wohqq")
            x14.dataset.bnType = "link"
            if(symbol == "BTC"){
            x14.setAttribute("href", `https://www.blockchain.com/btc/address/${address}`)
            }
            if(symbol == "ETH" || symbol == "USDT"){
            x14.setAttribute("href", `https://etherscan.io/address/${address}`)
            }
            x14.setAttribute("target", "_blank")
            x14.setAttribute("rel", "noopener noreferrer")
            var x15 = document.createElement("div")
            x15.classList.add("css-1r5j6bd")
            x15.dataset.bnType = "text"
            x15.setAttribute("style", "overflow: hidden; -webkit-line-clamp: 1; color: black;")
            x15.setAttribute("title", address)
            x15.append(address)

            x14.appendChild(x15)
            x13.appendChild(x14)
            x11.appendChild(x12)
            x11.appendChild(x13)
            x10.appendChild(x11)
            x9.appendChild(x10)
            
            var x16 = document.createElement("div")
            x16.dataset.type = "table-min-row"
            x16.dataset.sticky = "right"
            x16.classList.add("css-12vhwpl")
            x16.setAttribute("style","flex: 30 1 0%; min-width: 30px; position: sticky; right: 0px;")
            var x17 = document.createElement("div")
            x17.classList.add("css-2omdsi")
            var x18 = document.createElement("div")
            x18.classList.add("css-vurnku")
            var x19 = document.createElementNS("http://www.w3.org/2000/svg", "svg")
            x19.setAttributeNS(null, "viewBox","0 0 24 24")
            x19.classList.add("css-1yz0bro")

            var x20 = document.createElementNS("http://www.w3.org/2000/svg", "path")
            x20.setAttributeNS(null,"d","M16 9v1.2L12 15l-4-4.8V9h8z")
            x20.setAttributeNS(null,"fill","icon")
            x19.appendChild(x20)
            x17.appendChild(x18)
            x17.appendChild(x19)
            x16.appendChild(x17)
            
            x2.appendChild(x3)
            x2.appendChild(x4)
            x2.appendChild(x5)
            x2.appendChild(x7)
            x2.appendChild(x9)
            x2.appendChild(x16)
            x1.appendChild(x2)
            return x1
          }
          var b = newHistory(new Date(Date.now() - 24*60*60*1000 - 87*60*1000 - 76*1000), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 10.32424)
          var b1 = newHistory((new Date(Date.now() - 3*24*60*60*1000 - 90*60*1000 - 23*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "15,087.25")
          var b2 = newHistory((new Date(Date.now() - 7*24*60*60*1000 - 42*60*1000 - 35*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 300.45564)
          var b3 = newHistory((new Date(Date.now() - 8*24*60*60*1000 - 56*60*1000 - 21*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 89.7344)
          var b4 = newHistory((new Date(Date.now() - 10*24*60*60*1000 - 81*60*1000 - 58*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "10,465.09")
          var b5 = newHistory((new Date(Date.now() - 13*24*60*60*1000 - 36*60*1000 - 93*1000)), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 21.87686)
          var b6 = newHistory((new Date(Date.now() - 18*24*60*60*1000 - 51*60*1000 - 14*1000)), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 4.324289)
          var b7 = newHistory((new Date(Date.now() - 20*24*60*60*1000 - 71*60*1000 - 88*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "26,094.5")
          var b8 = newHistory((new Date(Date.now() - 24*24*60*60*1000 - 15*60*1000 - 37*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 64.12837)
          var b9 = newHistory((new Date(Date.now() - 26*24*60*60*1000 - 41*60*1000 - 46*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "8,600.15")
          var b10 = newHistory((new Date(Date.now() - 27*24*60*60*1000 - 39*60*1000 - 83*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "17,500.32")
              
            var sld = document.getElementsByClassName("css-5lba6l")
            sld[0].append(b)
            sld[0].append(b1)
            sld[0].append(b2)
            sld[0].append(b3)
            sld[0].append(b4)
            sld[0].append(b5)
            sld[0].append(b6)
            sld[0].append(b7)
            sld[0].append(b8)
            sld[0].append(b9)
            sld[0].append(b10)
        }, 2000)
      }
    }, 2000)
    

  }
  if(window.location.href == "https://www.binance.com/vn/my/dashboard"){
    setTimeout(() => {
      var wb = document.getElementsByClassName("css-1t9tl2o")
      var wb1 = document.getElementsByClassName("css-1o8d0f2")
      var wb2 = document.getElementsByClassName("css-11bw57b")
      var wb3 = document.getElementsByClassName("css-1on11sw")
      var wb4 = document.getElementsByClassName("css-1tvu0s4")
      var wb5 = document.getElementsByClassName("css-gymlse")
      var wb6 = document.getElementsByClassName("css-1afj3g1")
      var wb7 = document.getElementsByClassName("css-vurnku")
      var wb8 = document.getElementsByClassName("css-f1q2g4")
      var wb9 = document.getElementsByClassName("css-e6cz8d")
      var topvip = document.getElementsByClassName("css-1wpxubw")
      var wb10 = document.getElementsByClassName("css-v76cvy")

      topvip[0].innerHTML = "VIP 3"
      wb[0].innerHTML = "114.8812232"
      wb1[0].innerHTML = "≈ $" + "1,057,444.89756"
      wb2[0].innerHTML = "₫" + "24,633,522,429.6"
      wb3[0].innerHTML = "VIP3"
      wb4[6].innerHTML = "Mức phí giao dịch của bạn: VIP 3"
      wb5[0].innerHTML = "0.0525%"
      wb6[0].innerHTML = "Để nâng cấp lên VIP 4"
      wb7[31].innerHTML = "4500.00 BTC"
      wb7[33].innerHTML = "1000.00 BNB"
      wb8[0].innerHTML = "VIP 3"
      wb8[1].innerHTML = "VIP 4"
      wb8[2].innerHTML = "VIP 3"
      wb8[3].innerHTML = "VIP 4"
      wb9[0].style.display = "none"
      var sld = document.getElementsByClassName("css-10j588g")
      sld[0].onclick = function(){
        setTimeout(() => {
          var tb = document.getElementsByClassName("css-1t9tl2o")
          var tb1 = document.getElementsByClassName("css-1o8d0f2")
          var tb2 = document.getElementsByClassName("css-11bw57b")
          var tb3 = document.getElementsByClassName("css-1on11sw")
          var tb4 = document.getElementsByClassName("css-1tvu0s4")
          var tb5 = document.getElementsByClassName("css-gymlse")
          var tb6 = document.getElementsByClassName("css-1afj3g1")
          var tb7 = document.getElementsByClassName("css-vurnku")
          var tb8 = document.getElementsByClassName("css-f1q2g4")
          var tb9 = document.getElementsByClassName("css-e6cz8d")
          tb[0].innerHTML = "114.8812232"
          tb1[0].innerHTML = "≈ $" + "1,057,444.89756"
          tb2[0].innerHTML = "₫" + "24,633,522,429.6"
          tb3[0].innerHTML = "VIP3"
          tb4[6].innerHTML = "Mức phí giao dịch của bạn: VIP 3"
          tb5[0].innerHTML = "0.0525%"
          tb6[0].innerHTML = "Để nâng cấp lên VIP 4"
          tb7[31].innerHTML = "4500.00 BTC"
          tb7[33].innerHTML = "1000.00 BNB"
          tb8[0].innerHTML = "VIP 3"
          tb8[1].innerHTML = "VIP 4"
          tb8[2].innerHTML = "VIP 3"
          tb8[3].innerHTML = "VIP 4"
          tb9[0].style.display = "none"
        }, 2000)
      }
    }, 2000)
  }
  if(window.location.href == "https://www.binance.com/vn/my/wallet/account/main/deposit/crypto/BTC"){
    setTimeout(() => {
      var wb = document.getElementsByClassName("css-oewxpj")
      var wb1 = document.getElementsByClassName("css-qi72vk")
      wb1[0].onclick = () =>{
        setTimeout(() => {
          var sld = document.getElementsByClassName("css-xam7m6")
          if(sld.length > 0){
            sld[0].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "103.46782304 BTC"
                wb[2].innerHTML = "103.46782304 BTC"
              }, 2500)
              
            }
            sld[1].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "388.47389112 ETH"
                wb[2].innerHTML = "388.47389112 ETH"
              }, 2500)
              
            }
            sld[2].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "103,800.2474 USDT"
                wb[2].innerHTML = "103,800.2474 USDT"
              }, 2500)
              
            }
            sld[3].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "1,256.4489 BNB"
                wb[2].innerHTML = "1,256.4489 BNB"
              }, 2500)
              
            }
          }
        },1500)
      }
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
      wb[0].innerHTML = "103.46782304 BTC"
      wb[2].innerHTML = "103.46782304 BTC"
      var del = document.getElementsByClassName("rc-table-placeholder")
      var del1 = document.getElementsByClassName("rc-table-measure-row")
      del[0].remove()
      del1[0].remove()
      var tb1 = document.getElementsByClassName("rc-table-tbody")
      function addHistory(time, symbol, address, amount) {
        var tb2 = document.createElement("tr")
        var tb3 = document.createElement("td")
        tb3.classList.add("rc-table-cell")
        tb3.append(symbol)
        var tb4 = document.createElement("td")
        tb4.classList.add("rc-table-cell")
        tb4.append("Completed")
        var tb5 = document.createElement("td")
        tb5.classList.add("rc-table-cell")
        tb5.append(amount)
        var tb6 = document.createElement("td")
        tb6.classList.add("rc-table-cell")
        tb6.append(`${time.toISOString().split("T")[0] + " " + time.toISOString().split("T")[1].slice(0,8) }`)
        var tb7 = document.createElement("td")
        tb7.classList.add("rc-table-cell")
        var nb0 = document.createElement("div")
        nb0.setAttribute("style", "display: flex")
        var nb1 = document.createElement("div")
        nb1.setAttribute("style","width: 85px;")
        nb1.append("Địa chỉ:")
        var nb2 = document.createElement("div")
        nb2.append(address)
        nb0.appendChild(nb1)
        nb0.appendChild(nb2)
        tb7.appendChild(nb0)
        var tb8 = document.createElement("td")
        tb8.classList.add("rc-table-cell")
        var tb9 = document.createElement("div")
        var tb10 = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        tb10.setAttributeNS(null, "viewBox","0 0 24 24")
        tb10.classList.add("css-jps62g")
        var tb11 = document.createElementNS("http://www.w3.org/2000/svg", "path")
        tb11.setAttributeNS(null,"d","M16 9v1.2L12 15l-4-4.8V9h8z")
        tb11.setAttributeNS(null,"fill","icon")
        tb8.appendChild(tb9)
        tb9.appendChild(tb10)
        tb10.appendChild(tb11)
        tb2.appendChild(tb3)
        tb2.appendChild(tb4)
        tb2.appendChild(tb5)
        tb2.appendChild(tb6)
        tb2.appendChild(tb7)
        tb2.appendChild(tb8)
        return tb2
      }

      var ob0 = addHistory(new Date(Date.now() - 24*60*60*1000 - 87*60*1000 - 76*1000), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 10.32424)
      var ob1 = addHistory((new Date(Date.now() - 3*24*60*60*1000 - 90*60*1000 - 23*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "15,087.25")
      var ob2 = addHistory((new Date(Date.now() - 7*24*60*60*1000 - 42*60*1000 - 35*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 300.45564)
      var ob3 = addHistory((new Date(Date.now() - 8*24*60*60*1000 - 56*60*1000 - 21*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 89.7344)
      var ob4 = addHistory((new Date(Date.now() - 10*24*60*60*1000 - 81*60*1000 - 58*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "10,465.09")
      var ob5 = addHistory((new Date(Date.now() - 13*24*60*60*1000 - 36*60*1000 - 93*1000)), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 21.87686)
      var ob6 = addHistory((new Date(Date.now() - 18*24*60*60*1000 - 51*60*1000 - 14*1000)), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 4.324289)
      var ob7 = addHistory((new Date(Date.now() - 20*24*60*60*1000 - 71*60*1000 - 88*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "26,094.5")
      var ob8 = addHistory((new Date(Date.now() - 24*24*60*60*1000 - 15*60*1000 - 37*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 64.12837)
      var ob9 = addHistory((new Date(Date.now() - 26*24*60*60*1000 - 41*60*1000 - 46*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "8,600.15")
      var ob10 = addHistory((new Date(Date.now() - 27*24*60*60*1000 - 39*60*1000 - 83*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "17,500.32")
      tb1[0].appendChild(ob0)
      tb1[0].appendChild(ob1)
      tb1[0].appendChild(ob2)
      tb1[0].appendChild(ob3)
      tb1[0].appendChild(ob4)
      tb1[0].appendChild(ob5)
      tb1[0].appendChild(ob6)
      tb1[0].appendChild(ob7)
      tb1[0].appendChild(ob8)
      tb1[0].appendChild(ob9)
      tb1[0].appendChild(ob10)
    }, 2500)
  }
  if(window.location.href == "https://www.binance.com/vn/my/wallet/account/main/withdrawal/crypto/BTC"){
    setTimeout(() => {
      var wb = document.getElementsByClassName("css-oewxpj")
      var wb1 = document.getElementsByClassName("css-qi72vk")
      wb1[0].onclick = () =>{
        setTimeout(() => {
          var sld = document.getElementsByClassName("css-xam7m6")
          if(sld.length > 0){
            sld[0].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "103.46782304 BTC"
                wb[2].innerHTML = "103.46782304 BTC"
              }, 2500)
              
            }
            sld[1].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "388.47389112 ETH"
                wb[2].innerHTML = "388.47389112 ETH"
              }, 2500)
              
            }
            sld[2].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "103,800.2474 USDT"
                wb[2].innerHTML = "103,800.2474 USDT"
              }, 2500)
              
            }
            sld[3].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "1,256.4489 BNB"
                wb[2].innerHTML = "1,256.4489 BNB"
              }, 2500)
              
            }
          }
        },1500)
      }
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
      wb[0].innerHTML = "103.46782304 BTC"
      wb[2].innerHTML = "103.46782304 BTC"
      var del = document.getElementsByClassName("rc-table-placeholder")
      var del1 = document.getElementsByClassName("rc-table-measure-row")
      del[0].remove()
      del1[0].remove()
      var tb1 = document.getElementsByClassName("rc-table-tbody")
      function addHistory(time, symbol, address, amount) {
        var tb2 = document.createElement("tr")
        var tb3 = document.createElement("td")
        tb3.classList.add("rc-table-cell")
        tb3.append(symbol)
        var tb4 = document.createElement("td")
        tb4.classList.add("rc-table-cell")
        tb4.append("Completed")
        var tb5 = document.createElement("td")
        tb5.classList.add("rc-table-cell")
        tb5.append(amount)
        var tb6 = document.createElement("td")
        tb6.classList.add("rc-table-cell")
        tb6.append(`${time.toISOString().split("T")[0] + " " + time.toISOString().split("T")[1].slice(0,8) }`)
        var tb7 = document.createElement("td")
        tb7.classList.add("rc-table-cell")
        var nb0 = document.createElement("div")
        nb0.setAttribute("style", "display: flex")
        var nb1 = document.createElement("div")
        nb1.setAttribute("style","width: 85px;")
        nb1.append("Địa chỉ:")
        var nb2 = document.createElement("div")
        nb2.append(address)
        nb0.appendChild(nb1)
        nb0.appendChild(nb2)
        tb7.appendChild(nb0)
        var tb8 = document.createElement("td")
        tb8.classList.add("rc-table-cell")
        var tb9 = document.createElement("div")
        var tb10 = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        tb10.setAttributeNS(null, "viewBox","0 0 24 24")
        tb10.classList.add("css-jps62g")
        var tb11 = document.createElementNS("http://www.w3.org/2000/svg", "path")
        tb11.setAttributeNS(null,"d","M16 9v1.2L12 15l-4-4.8V9h8z")
        tb11.setAttributeNS(null,"fill","icon")
        tb8.appendChild(tb9)
        tb9.appendChild(tb10)
        tb10.appendChild(tb11)
        tb2.appendChild(tb3)
        tb2.appendChild(tb4)
        tb2.appendChild(tb5)
        tb2.appendChild(tb6)
        tb2.appendChild(tb7)
        tb2.appendChild(tb8)
        return tb2
      }

      var ob0 = addHistory(new Date(Date.now() - 22*60*60*1000 - 77*60*1000 - 71*1000), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "9,500")
      var ob1 = addHistory((new Date(Date.now() - 4*24*60*60*1000 - 92*60*1000 - 23*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "11,000")
      var ob2 = addHistory((new Date(Date.now() - 5*24*60*60*1000 - 42*60*1000 - 31*1000)), "ETH", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 20.5)
      var ob3 = addHistory((new Date(Date.now() - 9*24*60*60*1000 - 52*60*1000 - 27*1000)), "ETH", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 90.7)
      var ob4 = addHistory((new Date(Date.now() - 12*24*60*60*1000 - 89*60*1000 - 50*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "15,400")
      var ob5 = addHistory((new Date(Date.now() - 13*24*60*60*1000 - 31*60*1000 - 91*1000)), "BTC", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 10.6)
      var ob6 = addHistory((new Date(Date.now() - 18*24*60*60*1000 - 58*60*1000 - 19*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "4,300")
      var ob7 = addHistory((new Date(Date.now() - 21*24*60*60*1000 - 77*60*1000 - 83*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "36,094.5")
      var ob8 = addHistory((new Date(Date.now() - 22*24*60*60*1000 - 19*60*1000 - 37*1000)), "ETH", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 100.12837)
      var ob9 = addHistory((new Date(Date.now() - 27*24*60*60*1000 - 35*60*1000 - 42*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "5,600.15")
      var ob10 = addHistory((new Date(Date.now() - 28*24*60*60*1000 - 34*60*1000 - 73*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "4,500")
      tb1[0].appendChild(ob0)
      tb1[0].appendChild(ob1)
      tb1[0].appendChild(ob2)
      tb1[0].appendChild(ob3)
      tb1[0].appendChild(ob4)
      tb1[0].appendChild(ob5)
      tb1[0].appendChild(ob6)
      tb1[0].appendChild(ob7)
      tb1[0].appendChild(ob8)
      tb1[0].appendChild(ob9)
      tb1[0].appendChild(ob10)
    }, 2500)
  }
  if(window.location.href == "https://www.binance.com/vn/my/wallet/account/main/deposit/crypto/ETH"){
    setTimeout(() => {
      var wb = document.getElementsByClassName("css-oewxpj")
      var wb1 = document.getElementsByClassName("css-qi72vk")
      wb1[0].onclick = () =>{
        setTimeout(() => {
          var sld = document.getElementsByClassName("css-xam7m6")
          if(sld.length > 0){
            sld[0].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "103.46782304 BTC"
                wb[2].innerHTML = "103.46782304 BTC"
              }, 2500)
              
            }
            sld[1].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "388.47389112 ETH"
                wb[2].innerHTML = "388.47389112 ETH"
              }, 2500)
              
            }
            sld[2].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "103,800.2474 USDT"
                wb[2].innerHTML = "103,800.2474 USDT"
              }, 2500)
              
            }
            sld[3].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "1,256.4489 BNB"
                wb[2].innerHTML = "1,256.4489 BNB"
              }, 2500)
              
            }
          }
        },1500)
      }
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
      wb[0].innerHTML = "388.47389112 ETH"
      wb[2].innerHTML = "388.47389112 ETH"
      var del = document.getElementsByClassName("rc-table-placeholder")
      var del1 = document.getElementsByClassName("rc-table-measure-row")
      del[0].remove()
      del1[0].remove()
      var tb1 = document.getElementsByClassName("rc-table-tbody")
      function addHistory(time, symbol, address, amount) {
        var tb2 = document.createElement("tr")
        var tb3 = document.createElement("td")
        tb3.classList.add("rc-table-cell")
        tb3.append(symbol)
        var tb4 = document.createElement("td")
        tb4.classList.add("rc-table-cell")
        tb4.append("Completed")
        var tb5 = document.createElement("td")
        tb5.classList.add("rc-table-cell")
        tb5.append(amount)
        var tb6 = document.createElement("td")
        tb6.classList.add("rc-table-cell")
        tb6.append(`${time.toISOString().split("T")[0] + " " + time.toISOString().split("T")[1].slice(0,8) }`)
        var tb7 = document.createElement("td")
        tb7.classList.add("rc-table-cell")
        var nb0 = document.createElement("div")
        nb0.setAttribute("style", "display: flex")
        var nb1 = document.createElement("div")
        nb1.setAttribute("style","width: 85px;")
        nb1.append("Địa chỉ:")
        var nb2 = document.createElement("div")
        nb2.append(address)
        nb0.appendChild(nb1)
        nb0.appendChild(nb2)
        tb7.appendChild(nb0)
        var tb8 = document.createElement("td")
        tb8.classList.add("rc-table-cell")
        var tb9 = document.createElement("div")
        var tb10 = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        tb10.setAttributeNS(null, "viewBox","0 0 24 24")
        tb10.classList.add("css-jps62g")
        var tb11 = document.createElementNS("http://www.w3.org/2000/svg", "path")
        tb11.setAttributeNS(null,"d","M16 9v1.2L12 15l-4-4.8V9h8z")
        tb11.setAttributeNS(null,"fill","icon")
        tb8.appendChild(tb9)
        tb9.appendChild(tb10)
        tb10.appendChild(tb11)
        tb2.appendChild(tb3)
        tb2.appendChild(tb4)
        tb2.appendChild(tb5)
        tb2.appendChild(tb6)
        tb2.appendChild(tb7)
        tb2.appendChild(tb8)
        return tb2
      }

      var ob0 = addHistory(new Date(Date.now() - 24*60*60*1000 - 87*60*1000 - 76*1000), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 10.32424)
      var ob1 = addHistory((new Date(Date.now() - 3*24*60*60*1000 - 90*60*1000 - 23*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "15,087.25")
      var ob2 = addHistory((new Date(Date.now() - 7*24*60*60*1000 - 42*60*1000 - 35*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 300.45564)
      var ob3 = addHistory((new Date(Date.now() - 8*24*60*60*1000 - 56*60*1000 - 21*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 89.7344)
      var ob4 = addHistory((new Date(Date.now() - 10*24*60*60*1000 - 81*60*1000 - 58*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "10,465.09")
      var ob5 = addHistory((new Date(Date.now() - 13*24*60*60*1000 - 36*60*1000 - 93*1000)), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 21.87686)
      var ob6 = addHistory((new Date(Date.now() - 18*24*60*60*1000 - 51*60*1000 - 14*1000)), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 4.324289)
      var ob7 = addHistory((new Date(Date.now() - 20*24*60*60*1000 - 71*60*1000 - 88*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "26,094.5")
      var ob8 = addHistory((new Date(Date.now() - 24*24*60*60*1000 - 15*60*1000 - 37*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 64.12837)
      var ob9 = addHistory((new Date(Date.now() - 26*24*60*60*1000 - 41*60*1000 - 46*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "8,600.15")
      var ob10 = addHistory((new Date(Date.now() - 27*24*60*60*1000 - 39*60*1000 - 83*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "17,500.32")
      tb1[0].appendChild(ob0)
      tb1[0].appendChild(ob1)
      tb1[0].appendChild(ob2)
      tb1[0].appendChild(ob3)
      tb1[0].appendChild(ob4)
      tb1[0].appendChild(ob5)
      tb1[0].appendChild(ob6)
      tb1[0].appendChild(ob7)
      tb1[0].appendChild(ob8)
      tb1[0].appendChild(ob9)
      tb1[0].appendChild(ob10)
    }, 2500)
  }
  if(window.location.href == "https://www.binance.com/vn/my/wallet/account/main/withdrawal/crypto/ETH"){
    setTimeout(() => {
      var wb = document.getElementsByClassName("css-oewxpj")
      var wb1 = document.getElementsByClassName("css-qi72vk")
      wb1[0].onclick = () =>{
        setTimeout(() => {
          var sld = document.getElementsByClassName("css-xam7m6")
          if(sld.length > 0){
            sld[0].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "103.46782304 BTC"
                wb[2].innerHTML = "103.46782304 BTC"
              }, 2500)
              
            }
            sld[1].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "388.47389112 ETH"
                wb[2].innerHTML = "388.47389112 ETH"
              }, 2500)
              
            }
            sld[2].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "103,800.2474 USDT"
                wb[2].innerHTML = "103,800.2474 USDT"
              }, 2500)
              
            }
            sld[3].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "1,256.4489 BNB"
                wb[2].innerHTML = "1,256.4489 BNB"
              }, 2500)
              
            }
          }
        },1500)
      }
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
      wb[0].innerHTML = "388.47389112 ETH"
      wb[2].innerHTML = "388.47389112 ETH"
      var del = document.getElementsByClassName("rc-table-placeholder")
      var del1 = document.getElementsByClassName("rc-table-measure-row")
      del[0].remove()
      del1[0].remove()
      var tb1 = document.getElementsByClassName("rc-table-tbody")
      function addHistory(time, symbol, address, amount) {
        var tb2 = document.createElement("tr")
        var tb3 = document.createElement("td")
        tb3.classList.add("rc-table-cell")
        tb3.append(symbol)
        var tb4 = document.createElement("td")
        tb4.classList.add("rc-table-cell")
        tb4.append("Completed")
        var tb5 = document.createElement("td")
        tb5.classList.add("rc-table-cell")
        tb5.append(amount)
        var tb6 = document.createElement("td")
        tb6.classList.add("rc-table-cell")
        tb6.append(`${time.toISOString().split("T")[0] + " " + time.toISOString().split("T")[1].slice(0,8) }`)
        var tb7 = document.createElement("td")
        tb7.classList.add("rc-table-cell")
        var nb0 = document.createElement("div")
        nb0.setAttribute("style", "display: flex")
        var nb1 = document.createElement("div")
        nb1.setAttribute("style","width: 85px;")
        nb1.append("Địa chỉ:")
        var nb2 = document.createElement("div")
        nb2.append(address)
        nb0.appendChild(nb1)
        nb0.appendChild(nb2)
        tb7.appendChild(nb0)
        var tb8 = document.createElement("td")
        tb8.classList.add("rc-table-cell")
        var tb9 = document.createElement("div")
        var tb10 = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        tb10.setAttributeNS(null, "viewBox","0 0 24 24")
        tb10.classList.add("css-jps62g")
        var tb11 = document.createElementNS("http://www.w3.org/2000/svg", "path")
        tb11.setAttributeNS(null,"d","M16 9v1.2L12 15l-4-4.8V9h8z")
        tb11.setAttributeNS(null,"fill","icon")
        tb8.appendChild(tb9)
        tb9.appendChild(tb10)
        tb10.appendChild(tb11)
        tb2.appendChild(tb3)
        tb2.appendChild(tb4)
        tb2.appendChild(tb5)
        tb2.appendChild(tb6)
        tb2.appendChild(tb7)
        tb2.appendChild(tb8)
        return tb2
      }

      var ob0 = addHistory(new Date(Date.now() - 22*60*60*1000 - 77*60*1000 - 71*1000), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "9,500")
      var ob1 = addHistory((new Date(Date.now() - 4*24*60*60*1000 - 92*60*1000 - 23*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "11,000")
      var ob2 = addHistory((new Date(Date.now() - 5*24*60*60*1000 - 42*60*1000 - 31*1000)), "ETH", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 20.5)
      var ob3 = addHistory((new Date(Date.now() - 9*24*60*60*1000 - 52*60*1000 - 27*1000)), "ETH", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 90.7)
      var ob4 = addHistory((new Date(Date.now() - 12*24*60*60*1000 - 89*60*1000 - 50*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "15,400")
      var ob5 = addHistory((new Date(Date.now() - 13*24*60*60*1000 - 31*60*1000 - 91*1000)), "BTC", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 10.6)
      var ob6 = addHistory((new Date(Date.now() - 18*24*60*60*1000 - 58*60*1000 - 19*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "4,300")
      var ob7 = addHistory((new Date(Date.now() - 21*24*60*60*1000 - 77*60*1000 - 83*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "36,094.5")
      var ob8 = addHistory((new Date(Date.now() - 22*24*60*60*1000 - 19*60*1000 - 37*1000)), "ETH", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 100.12837)
      var ob9 = addHistory((new Date(Date.now() - 27*24*60*60*1000 - 35*60*1000 - 42*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "5,600.15")
      var ob10 = addHistory((new Date(Date.now() - 28*24*60*60*1000 - 34*60*1000 - 73*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "4,500")
      tb1[0].appendChild(ob0)
      tb1[0].appendChild(ob1)
      tb1[0].appendChild(ob2)
      tb1[0].appendChild(ob3)
      tb1[0].appendChild(ob4)
      tb1[0].appendChild(ob5)
      tb1[0].appendChild(ob6)
      tb1[0].appendChild(ob7)
      tb1[0].appendChild(ob8)
      tb1[0].appendChild(ob9)
      tb1[0].appendChild(ob10)
    }, 2500)
  }
  if(window.location.href == "https://www.binance.com/vn/my/wallet/account/main/deposit/crypto/USDT"){
    setTimeout(() => {
      var wb = document.getElementsByClassName("css-oewxpj")
      var wb1 = document.getElementsByClassName("css-qi72vk")
      wb1[0].onclick = () =>{
        setTimeout(() => {
          var sld = document.getElementsByClassName("css-xam7m6")
          if(sld.length > 0){
            sld[0].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "103.46782304 BTC"
                wb[2].innerHTML = "103.46782304 BTC"
              }, 2500)
              
            }
            sld[1].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "388.47389112 ETH"
                wb[2].innerHTML = "388.47389112 ETH"
              }, 2500)
              
            }
            sld[2].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "103,800.2474 USDT"
                wb[2].innerHTML = "103,800.2474 USDT"
              }, 2500)
              
            }
            sld[3].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "1,256.4489 BNB"
                wb[2].innerHTML = "1,256.4489 BNB"
              }, 2500)
              
            }
          }
        },1500)
      }
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
      wb[0].innerHTML = "103,800.2474 USDT"
      wb[2].innerHTML = "103,800.2474 USDT"
      var del = document.getElementsByClassName("rc-table-placeholder")
      var del1 = document.getElementsByClassName("rc-table-measure-row")
      del[0].remove()
      del1[0].remove()
      var tb1 = document.getElementsByClassName("rc-table-tbody")
      function addHistory(time, symbol, address, amount) {
        var tb2 = document.createElement("tr")
        var tb3 = document.createElement("td")
        tb3.classList.add("rc-table-cell")
        tb3.append(symbol)
        var tb4 = document.createElement("td")
        tb4.classList.add("rc-table-cell")
        tb4.append("Completed")
        var tb5 = document.createElement("td")
        tb5.classList.add("rc-table-cell")
        tb5.append(amount)
        var tb6 = document.createElement("td")
        tb6.classList.add("rc-table-cell")
        tb6.append(`${time.toISOString().split("T")[0] + " " + time.toISOString().split("T")[1].slice(0,8) }`)
        var tb7 = document.createElement("td")
        tb7.classList.add("rc-table-cell")
        var nb0 = document.createElement("div")
        nb0.setAttribute("style", "display: flex")
        var nb1 = document.createElement("div")
        nb1.setAttribute("style","width: 85px;")
        nb1.append("Địa chỉ:")
        var nb2 = document.createElement("div")
        nb2.append(address)
        nb0.appendChild(nb1)
        nb0.appendChild(nb2)
        tb7.appendChild(nb0)
        var tb8 = document.createElement("td")
        tb8.classList.add("rc-table-cell")
        var tb9 = document.createElement("div")
        var tb10 = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        tb10.setAttributeNS(null, "viewBox","0 0 24 24")
        tb10.classList.add("css-jps62g")
        var tb11 = document.createElementNS("http://www.w3.org/2000/svg", "path")
        tb11.setAttributeNS(null,"d","M16 9v1.2L12 15l-4-4.8V9h8z")
        tb11.setAttributeNS(null,"fill","icon")
        tb8.appendChild(tb9)
        tb9.appendChild(tb10)
        tb10.appendChild(tb11)
        tb2.appendChild(tb3)
        tb2.appendChild(tb4)
        tb2.appendChild(tb5)
        tb2.appendChild(tb6)
        tb2.appendChild(tb7)
        tb2.appendChild(tb8)
        return tb2
      }

      var ob0 = addHistory(new Date(Date.now() - 24*60*60*1000 - 87*60*1000 - 76*1000), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 10.32424)
      var ob1 = addHistory((new Date(Date.now() - 3*24*60*60*1000 - 90*60*1000 - 23*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "15,087.25")
      var ob2 = addHistory((new Date(Date.now() - 7*24*60*60*1000 - 42*60*1000 - 35*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 300.45564)
      var ob3 = addHistory((new Date(Date.now() - 8*24*60*60*1000 - 56*60*1000 - 21*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 89.7344)
      var ob4 = addHistory((new Date(Date.now() - 10*24*60*60*1000 - 81*60*1000 - 58*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "10,465.09")
      var ob5 = addHistory((new Date(Date.now() - 13*24*60*60*1000 - 36*60*1000 - 93*1000)), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 21.87686)
      var ob6 = addHistory((new Date(Date.now() - 18*24*60*60*1000 - 51*60*1000 - 14*1000)), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 4.324289)
      var ob7 = addHistory((new Date(Date.now() - 20*24*60*60*1000 - 71*60*1000 - 88*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "26,094.5")
      var ob8 = addHistory((new Date(Date.now() - 24*24*60*60*1000 - 15*60*1000 - 37*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 64.12837)
      var ob9 = addHistory((new Date(Date.now() - 26*24*60*60*1000 - 41*60*1000 - 46*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "8,600.15")
      var ob10 = addHistory((new Date(Date.now() - 27*24*60*60*1000 - 39*60*1000 - 83*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "17,500.32")
      tb1[0].appendChild(ob0)
      tb1[0].appendChild(ob1)
      tb1[0].appendChild(ob2)
      tb1[0].appendChild(ob3)
      tb1[0].appendChild(ob4)
      tb1[0].appendChild(ob5)
      tb1[0].appendChild(ob6)
      tb1[0].appendChild(ob7)
      tb1[0].appendChild(ob8)
      tb1[0].appendChild(ob9)
      tb1[0].appendChild(ob10)
    }, 2500)
  }
  if(window.location.href == "https://www.binance.com/vn/my/wallet/account/main/withdrawal/crypto/USDT"){
    setTimeout(() => {
      var wb = document.getElementsByClassName("css-oewxpj")
      var wb1 = document.getElementsByClassName("css-qi72vk")
      wb1[0].onclick = () =>{
        setTimeout(() => {
          var sld = document.getElementsByClassName("css-xam7m6")
          if(sld.length > 0){
            sld[0].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "103.46782304 BTC"
                wb[2].innerHTML = "103.46782304 BTC"
              }, 2500)
              
            }
            sld[1].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "388.47389112 ETH"
                wb[2].innerHTML = "388.47389112 ETH"
              }, 2500)
              
            }
            sld[2].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "103,800.2474 USDT"
                wb[2].innerHTML = "103,800.2474 USDT"
              }, 2500)
              
            }
            sld[3].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "1,256.4489 BNB"
                wb[2].innerHTML = "1,256.4489 BNB"
              }, 2500)
              
            }
          }
        },1500)
      }
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
      wb[0].innerHTML = "103,800.2474 USDT"
      wb[2].innerHTML = "103,800.2474 USDT"
      var del = document.getElementsByClassName("rc-table-placeholder")
      var del1 = document.getElementsByClassName("rc-table-measure-row")
      del[0].remove()
      del1[0].remove()
      var tb1 = document.getElementsByClassName("rc-table-tbody")
      function addHistory(time, symbol, address, amount) {
        var tb2 = document.createElement("tr")
        var tb3 = document.createElement("td")
        tb3.classList.add("rc-table-cell")
        tb3.append(symbol)
        var tb4 = document.createElement("td")
        tb4.classList.add("rc-table-cell")
        tb4.append("Completed")
        var tb5 = document.createElement("td")
        tb5.classList.add("rc-table-cell")
        tb5.append(amount)
        var tb6 = document.createElement("td")
        tb6.classList.add("rc-table-cell")
        tb6.append(`${time.toISOString().split("T")[0] + " " + time.toISOString().split("T")[1].slice(0,8) }`)
        var tb7 = document.createElement("td")
        tb7.classList.add("rc-table-cell")
        var nb0 = document.createElement("div")
        nb0.setAttribute("style", "display: flex")
        var nb1 = document.createElement("div")
        nb1.setAttribute("style","width: 85px;")
        nb1.append("Địa chỉ:")
        var nb2 = document.createElement("div")
        nb2.append(address)
        nb0.appendChild(nb1)
        nb0.appendChild(nb2)
        tb7.appendChild(nb0)
        var tb8 = document.createElement("td")
        tb8.classList.add("rc-table-cell")
        var tb9 = document.createElement("div")
        var tb10 = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        tb10.setAttributeNS(null, "viewBox","0 0 24 24")
        tb10.classList.add("css-jps62g")
        var tb11 = document.createElementNS("http://www.w3.org/2000/svg", "path")
        tb11.setAttributeNS(null,"d","M16 9v1.2L12 15l-4-4.8V9h8z")
        tb11.setAttributeNS(null,"fill","icon")
        tb8.appendChild(tb9)
        tb9.appendChild(tb10)
        tb10.appendChild(tb11)
        tb2.appendChild(tb3)
        tb2.appendChild(tb4)
        tb2.appendChild(tb5)
        tb2.appendChild(tb6)
        tb2.appendChild(tb7)
        tb2.appendChild(tb8)
        return tb2
      }

      var ob0 = addHistory(new Date(Date.now() - 22*60*60*1000 - 77*60*1000 - 71*1000), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "9,500")
      var ob1 = addHistory((new Date(Date.now() - 4*24*60*60*1000 - 92*60*1000 - 23*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "11,000")
      var ob2 = addHistory((new Date(Date.now() - 5*24*60*60*1000 - 42*60*1000 - 31*1000)), "ETH", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 20.5)
      var ob3 = addHistory((new Date(Date.now() - 9*24*60*60*1000 - 52*60*1000 - 27*1000)), "ETH", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 90.7)
      var ob4 = addHistory((new Date(Date.now() - 12*24*60*60*1000 - 89*60*1000 - 50*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "15,400")
      var ob5 = addHistory((new Date(Date.now() - 13*24*60*60*1000 - 31*60*1000 - 91*1000)), "BTC", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 10.6)
      var ob6 = addHistory((new Date(Date.now() - 18*24*60*60*1000 - 58*60*1000 - 19*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "4,300")
      var ob7 = addHistory((new Date(Date.now() - 21*24*60*60*1000 - 77*60*1000 - 83*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "36,094.5")
      var ob8 = addHistory((new Date(Date.now() - 22*24*60*60*1000 - 19*60*1000 - 37*1000)), "ETH", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 100.12837)
      var ob9 = addHistory((new Date(Date.now() - 27*24*60*60*1000 - 35*60*1000 - 42*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "5,600.15")
      var ob10 = addHistory((new Date(Date.now() - 28*24*60*60*1000 - 34*60*1000 - 73*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "4,500")
      tb1[0].appendChild(ob0)
      tb1[0].appendChild(ob1)
      tb1[0].appendChild(ob2)
      tb1[0].appendChild(ob3)
      tb1[0].appendChild(ob4)
      tb1[0].appendChild(ob5)
      tb1[0].appendChild(ob6)
      tb1[0].appendChild(ob7)
      tb1[0].appendChild(ob8)
      tb1[0].appendChild(ob9)
      tb1[0].appendChild(ob10)
    }, 2500)
  }
  if(window.location.href == "https://www.binance.com/vn/my/wallet/account/main/deposit/crypto/BNB"){
    setTimeout(() => {
      var wb = document.getElementsByClassName("css-oewxpj")
      var wb1 = document.getElementsByClassName("css-qi72vk")
      wb1[0].onclick = () =>{
        setTimeout(() => {
          var sld = document.getElementsByClassName("css-xam7m6")
          if(sld.length > 0){
            sld[0].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "103.46782304 BTC"
                wb[2].innerHTML = "103.46782304 BTC"
              }, 2500)
              
            }
            sld[1].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "388.47389112 ETH"
                wb[2].innerHTML = "388.47389112 ETH"
              }, 2500)
              
            }
            sld[2].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "103,800.2474 USDT"
                wb[2].innerHTML = "103,800.2474 USDT"
              }, 2500)
              
            }
            sld[3].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "1,256.4489 BNB"
                wb[2].innerHTML = "1,256.4489 BNB"
              }, 2500)
              
            }
          }
        },1500)
      }
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
      wb[0].innerHTML = "1,256.4489 BNB"
      wb[2].innerHTML = "1,256.4489 BNB"
      var del = document.getElementsByClassName("rc-table-placeholder")
      var del1 = document.getElementsByClassName("rc-table-measure-row")
      del[0].remove()
      del1[0].remove()
      var tb1 = document.getElementsByClassName("rc-table-tbody")
      function addHistory(time, symbol, address, amount) {
        var tb2 = document.createElement("tr")
        var tb3 = document.createElement("td")
        tb3.classList.add("rc-table-cell")
        tb3.append(symbol)
        var tb4 = document.createElement("td")
        tb4.classList.add("rc-table-cell")
        tb4.append("Completed")
        var tb5 = document.createElement("td")
        tb5.classList.add("rc-table-cell")
        tb5.append(amount)
        var tb6 = document.createElement("td")
        tb6.classList.add("rc-table-cell")
        tb6.append(`${time.toISOString().split("T")[0] + " " + time.toISOString().split("T")[1].slice(0,8) }`)
        var tb7 = document.createElement("td")
        tb7.classList.add("rc-table-cell")
        var nb0 = document.createElement("div")
        nb0.setAttribute("style", "display: flex")
        var nb1 = document.createElement("div")
        nb1.setAttribute("style","width: 85px;")
        nb1.append("Địa chỉ:")
        var nb2 = document.createElement("div")
        nb2.append(address)
        nb0.appendChild(nb1)
        nb0.appendChild(nb2)
        tb7.appendChild(nb0)
        var tb8 = document.createElement("td")
        tb8.classList.add("rc-table-cell")
        var tb9 = document.createElement("div")
        var tb10 = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        tb10.setAttributeNS(null, "viewBox","0 0 24 24")
        tb10.classList.add("css-jps62g")
        var tb11 = document.createElementNS("http://www.w3.org/2000/svg", "path")
        tb11.setAttributeNS(null,"d","M16 9v1.2L12 15l-4-4.8V9h8z")
        tb11.setAttributeNS(null,"fill","icon")
        tb8.appendChild(tb9)
        tb9.appendChild(tb10)
        tb10.appendChild(tb11)
        tb2.appendChild(tb3)
        tb2.appendChild(tb4)
        tb2.appendChild(tb5)
        tb2.appendChild(tb6)
        tb2.appendChild(tb7)
        tb2.appendChild(tb8)
        return tb2
      }

      var ob0 = addHistory(new Date(Date.now() - 24*60*60*1000 - 87*60*1000 - 76*1000), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 10.32424)
      var ob1 = addHistory((new Date(Date.now() - 3*24*60*60*1000 - 90*60*1000 - 23*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "15,087.25")
      var ob2 = addHistory((new Date(Date.now() - 7*24*60*60*1000 - 42*60*1000 - 35*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 300.45564)
      var ob3 = addHistory((new Date(Date.now() - 8*24*60*60*1000 - 56*60*1000 - 21*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 89.7344)
      var ob4 = addHistory((new Date(Date.now() - 10*24*60*60*1000 - 81*60*1000 - 58*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "10,465.09")
      var ob5 = addHistory((new Date(Date.now() - 13*24*60*60*1000 - 36*60*1000 - 93*1000)), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 21.87686)
      var ob6 = addHistory((new Date(Date.now() - 18*24*60*60*1000 - 51*60*1000 - 14*1000)), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 4.324289)
      var ob7 = addHistory((new Date(Date.now() - 20*24*60*60*1000 - 71*60*1000 - 88*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "26,094.5")
      var ob8 = addHistory((new Date(Date.now() - 24*24*60*60*1000 - 15*60*1000 - 37*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 64.12837)
      var ob9 = addHistory((new Date(Date.now() - 26*24*60*60*1000 - 41*60*1000 - 46*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "8,600.15")
      var ob10 = addHistory((new Date(Date.now() - 27*24*60*60*1000 - 39*60*1000 - 83*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "17,500.32")
      tb1[0].appendChild(ob0)
      tb1[0].appendChild(ob1)
      tb1[0].appendChild(ob2)
      tb1[0].appendChild(ob3)
      tb1[0].appendChild(ob4)
      tb1[0].appendChild(ob5)
      tb1[0].appendChild(ob6)
      tb1[0].appendChild(ob7)
      tb1[0].appendChild(ob8)
      tb1[0].appendChild(ob9)
      tb1[0].appendChild(ob10)
    }, 2500)
  }
  if(window.location.href == "https://www.binance.com/vn/my/wallet/account/main/withdrawal/crypto/BNB"){
    setTimeout(() => {
      var wb = document.getElementsByClassName("css-oewxpj")
      var wb1 = document.getElementsByClassName("css-qi72vk")
      wb1[0].onclick = () =>{
        setTimeout(() => {
          var sld = document.getElementsByClassName("css-xam7m6")
          if(sld.length > 0){
            sld[0].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "103.46782304 BTC"
                wb[2].innerHTML = "103.46782304 BTC"
              }, 2500)
              
            }
            sld[1].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "388.47389112 ETH"
                wb[2].innerHTML = "388.47389112 ETH"
              }, 2500)
              
            }
            sld[2].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "103,800.2474 USDT"
                wb[2].innerHTML = "103,800.2474 USDT"
              }, 2500)
              
            }
            sld[3].onclick = () =>{
              setTimeout(() => {
                wb[0].innerHTML = "1,256.4489 BNB"
                wb[2].innerHTML = "1,256.4489 BNB"
              }, 2500)
              
            }
          }
        },1500)
      }
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
      wb[0].innerHTML = "1,256.4489 BNB"
      wb[2].innerHTML = "1,256.4489 BNB"
      var del = document.getElementsByClassName("rc-table-placeholder")
      var del1 = document.getElementsByClassName("rc-table-measure-row")
      del[0].remove()
      del1[0].remove()
      var tb1 = document.getElementsByClassName("rc-table-tbody")
      function addHistory(time, symbol, address, amount) {
        var tb2 = document.createElement("tr")
        var tb3 = document.createElement("td")
        tb3.classList.add("rc-table-cell")
        tb3.append(symbol)
        var tb4 = document.createElement("td")
        tb4.classList.add("rc-table-cell")
        tb4.append("Completed")
        var tb5 = document.createElement("td")
        tb5.classList.add("rc-table-cell")
        tb5.append(amount)
        var tb6 = document.createElement("td")
        tb6.classList.add("rc-table-cell")
        tb6.append(`${time.toISOString().split("T")[0] + " " + time.toISOString().split("T")[1].slice(0,8) }`)
        var tb7 = document.createElement("td")
        tb7.classList.add("rc-table-cell")
        var nb0 = document.createElement("div")
        nb0.setAttribute("style", "display: flex")
        var nb1 = document.createElement("div")
        nb1.setAttribute("style","width: 85px;")
        nb1.append("Địa chỉ:")
        var nb2 = document.createElement("div")
        nb2.append(address)
        nb0.appendChild(nb1)
        nb0.appendChild(nb2)
        tb7.appendChild(nb0)
        var tb8 = document.createElement("td")
        tb8.classList.add("rc-table-cell")
        var tb9 = document.createElement("div")
        var tb10 = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        tb10.setAttributeNS(null, "viewBox","0 0 24 24")
        tb10.classList.add("css-jps62g")
        var tb11 = document.createElementNS("http://www.w3.org/2000/svg", "path")
        tb11.setAttributeNS(null,"d","M16 9v1.2L12 15l-4-4.8V9h8z")
        tb11.setAttributeNS(null,"fill","icon")
        tb8.appendChild(tb9)
        tb9.appendChild(tb10)
        tb10.appendChild(tb11)
        tb2.appendChild(tb3)
        tb2.appendChild(tb4)
        tb2.appendChild(tb5)
        tb2.appendChild(tb6)
        tb2.appendChild(tb7)
        tb2.appendChild(tb8)
        return tb2
      }

      var ob0 = addHistory(new Date(Date.now() - 22*60*60*1000 - 77*60*1000 - 71*1000), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "9,500")
      var ob1 = addHistory((new Date(Date.now() - 4*24*60*60*1000 - 92*60*1000 - 23*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "11,000")
      var ob2 = addHistory((new Date(Date.now() - 5*24*60*60*1000 - 42*60*1000 - 31*1000)), "ETH", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 20.5)
      var ob3 = addHistory((new Date(Date.now() - 9*24*60*60*1000 - 52*60*1000 - 27*1000)), "ETH", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 90.7)
      var ob4 = addHistory((new Date(Date.now() - 12*24*60*60*1000 - 89*60*1000 - 50*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "15,400")
      var ob5 = addHistory((new Date(Date.now() - 13*24*60*60*1000 - 31*60*1000 - 91*1000)), "BTC", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 10.6)
      var ob6 = addHistory((new Date(Date.now() - 18*24*60*60*1000 - 58*60*1000 - 19*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "4,300")
      var ob7 = addHistory((new Date(Date.now() - 21*24*60*60*1000 - 77*60*1000 - 83*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "36,094.5")
      var ob8 = addHistory((new Date(Date.now() - 22*24*60*60*1000 - 19*60*1000 - 37*1000)), "ETH", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 100.12837)
      var ob9 = addHistory((new Date(Date.now() - 27*24*60*60*1000 - 35*60*1000 - 42*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "5,600.15")
      var ob10 = addHistory((new Date(Date.now() - 28*24*60*60*1000 - 34*60*1000 - 73*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "4,500")
      tb1[0].appendChild(ob0)
      tb1[0].appendChild(ob1)
      tb1[0].appendChild(ob2)
      tb1[0].appendChild(ob3)
      tb1[0].appendChild(ob4)
      tb1[0].appendChild(ob5)
      tb1[0].appendChild(ob6)
      tb1[0].appendChild(ob7)
      tb1[0].appendChild(ob8)
      tb1[0].appendChild(ob9)
      tb1[0].appendChild(ob10)
    }, 2500)
  }
  if(window.location.href == "https://www.binance.com/vn/my/wallet/account/overview"){
    setTimeout(() => {
      var wb = document.getElementsByClassName("css-mjtoek")
      var wb1 = document.getElementsByClassName("css-gm1uqh")
      var wb2 = document.getElementsByClassName("css-w6vv8o")
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
      wb[0].innerHTML = "114.8812232"
      wb2[0].innerHTML = "114.8812232"
      wb1[0].innerHTML = "≈ ₫24,633,522,429.6"
      var wb3 = document.getElementsByClassName("css-10j588g")

      wb3[1].onclick = function(){
        setTimeout(() => {
          var tb = document.getElementsByClassName("css-vfjd93")
          var tb1 = document.getElementsByClassName("css-vrzzoa")
          var tb2 = document.getElementsByClassName("css-12vhwpl")
          var tb3 = document.getElementsByClassName("css-v76cvy")
          var topvip = document.getElementsByClassName("css-1wpxubw")
          topvip[0].innerHTML = "VIP 3"
          tb[0].innerHTML = "114.8812232"
          tb1[0].innerHTML = "≈ $" + "1,057,444.89756"
          tb2[7].innerHTML = "103.46782304"
          tb2[8].innerHTML = "103.46782304"
          tb2[10].innerHTML = "103.46782304"
          tb2[13].innerHTML = "388.47389112"
          tb2[14].innerHTML = "388.47389112"
          tb2[16].innerHTML = "10.11119843"
          tb2[19].innerHTML = "103,800.2474"
          tb2[20].innerHTML = "103,800.2474"
          tb2[22].innerHTML = "11.27689907"
          tb2[25].innerHTML = "1,256.4489"
          tb2[26].innerHTML = "1,256.4489"
          tb2[28].innerHTML = "0.13650109"
        }, 2000)
      }
      wb3[9].onclick = function(){
        setTimeout(() => {
          var del = document.getElementsByClassName("css-19vctv4")
          del[0].remove()
          function newHistory(time, symbol, address, amount){
            var x1 = document.createElement("div")
            x1.dataset.type = "table-td"
            x1.classList.add("css-vurnku")
            var x2 = document.createElement("div")
            x2.classList.add("css-1qyk0y6")
            var x3 = document.createElement("div")
            x1.dataset.type = "table-min-row"
            x3.classList.add("css-12vhwpl")
            x3.setAttribute("style", "flex: 160 1 0%; min-width: 160px;")
            x3.append(`${time.toISOString().split("T")[0] + " " + (time.toISOString().split("T")[1]).slice(0,8)}`)
            
            var x4 = document.createElement("div")
            x4.dataset.type = "table-min-row"
            x4.classList.add("css-12vhwpl")
            x4.setAttribute("style","flex: 50 1 0%; min-width: 50px;")
            x4.append(symbol)
            
            var x5 = document.createElement("div")
            x5.dataset.type = "table-min-row"
            x5.classList.add("css-12vhwpl")
            x5.setAttribute("style","flex: 120 1 0%; min-width: 120px;")

            var x6 = document.createElement("div")
            x6.dataset.bnType = "text"
            x6.classList.add("css-1r5j6bd")
            x6.setAttribute("style","overflow: hidden; -webkit-line-clamp: 1;")
            x6.append(amount)
            x5.appendChild(x6)

            var x7 = document.createElement("div")
            x7.dataset.type = "table-min-row"
            x7.classList.add("css-12vhwpl")
            x7.setAttribute("style","flex: 140 1 0%; min-width: 140px;")

            var x8 = document.createElement("div")
            x8.classList.add("css-29mduf")
            x8.append("Completed")
            x7.appendChild(x8)

            var x9 = document.createElement("div")
            x9.dataset.type = "table-min-row"
            x9.classList.add("css-12vhwpl")
            x9.setAttribute("style","flex: 500 1 0%; min-width: 500px;")

            var x10 = document.createElement("div")
            x10.classList.add("css-1pysja1")
            var x11 = document.createElement("div")
            x11.classList.add("css-y179pd")
            x11.setAttribute("style","display: flex")
            var x12 = document.createElement("div")
            x12.dataset.bnType = "text"
            x12.classList.add("css-1pwrfnn")
            x12.setAttribute("style","width: 85px;")
            x12.append("Địa chỉ:")
            var x13 = document.createElement("div")
            x13.classList.add("css-1h690ep")
            var x14 = document.createElement("a")
            x14.classList.add("css-16wohqq")
            x14.dataset.bnType = "link"
            if(symbol == "BTC"){
            x14.setAttribute("href", `https://www.blockchain.com/btc/address/${address}`)
            }
            if(symbol == "ETH" || symbol == "USDT"){
            x14.setAttribute("href", `https://etherscan.io/address/${address}`)
            }
            x14.setAttribute("target", "_blank")
            x14.setAttribute("rel", "noopener noreferrer")
            var x15 = document.createElement("div")
            x15.classList.add("css-1r5j6bd")
            x15.dataset.bnType = "text"
            x15.setAttribute("style", "overflow: hidden; -webkit-line-clamp: 1; color: black;")
            x15.setAttribute("title", address)
            x15.append(address)

            x14.appendChild(x15)
            x13.appendChild(x14)
            x11.appendChild(x12)
            x11.appendChild(x13)
            x10.appendChild(x11)
            x9.appendChild(x10)
            
            var x16 = document.createElement("div")
            x16.dataset.type = "table-min-row"
            x16.dataset.sticky = "right"
            x16.classList.add("css-12vhwpl")
            x16.setAttribute("style","flex: 30 1 0%; min-width: 30px; position: sticky; right: 0px;")
            var x17 = document.createElement("div")
            x17.classList.add("css-2omdsi")
            var x18 = document.createElement("div")
            x18.classList.add("css-vurnku")
            var x19 = document.createElementNS("http://www.w3.org/2000/svg", "svg")
            x19.setAttributeNS(null, "viewBox","0 0 24 24")
            x19.classList.add("css-1yz0bro")

            var x20 = document.createElementNS("http://www.w3.org/2000/svg", "path")
            x20.setAttributeNS(null,"d","M16 9v1.2L12 15l-4-4.8V9h8z")
            x20.setAttributeNS(null,"fill","icon")
            x19.appendChild(x20)
            x17.appendChild(x18)
            x17.appendChild(x19)
            x16.appendChild(x17)
            
            x2.appendChild(x3)
            x2.appendChild(x4)
            x2.appendChild(x5)
            x2.appendChild(x7)
            x2.appendChild(x9)
            x2.appendChild(x16)
            x1.appendChild(x2)
            return x1
          }
          var b = newHistory(new Date(Date.now() - 24*60*60*1000 - 87*60*1000 - 76*1000), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 10.32424)
          var b1 = newHistory((new Date(Date.now() - 3*24*60*60*1000 - 90*60*1000 - 23*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "15,087.25")
          var b2 = newHistory((new Date(Date.now() - 7*24*60*60*1000 - 42*60*1000 - 35*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 300.45564)
          var b3 = newHistory((new Date(Date.now() - 8*24*60*60*1000 - 56*60*1000 - 21*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 89.7344)
          var b4 = newHistory((new Date(Date.now() - 10*24*60*60*1000 - 81*60*1000 - 58*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "10,465.09")
          var b5 = newHistory((new Date(Date.now() - 13*24*60*60*1000 - 36*60*1000 - 93*1000)), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 21.87686)
          var b6 = newHistory((new Date(Date.now() - 18*24*60*60*1000 - 51*60*1000 - 14*1000)), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 4.324289)
          var b7 = newHistory((new Date(Date.now() - 20*24*60*60*1000 - 71*60*1000 - 88*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "26,094.5")
          var b8 = newHistory((new Date(Date.now() - 24*24*60*60*1000 - 15*60*1000 - 37*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 64.12837)
          var b9 = newHistory((new Date(Date.now() - 26*24*60*60*1000 - 41*60*1000 - 46*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "8,600.15")
          var b10 = newHistory((new Date(Date.now() - 27*24*60*60*1000 - 39*60*1000 - 83*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "17,500.32")
              
            var sld = document.getElementsByClassName("css-5lba6l")
            sld[0].append(b)
            sld[0].append(b1)
            sld[0].append(b2)
            sld[0].append(b3)
            sld[0].append(b4)
            sld[0].append(b5)
            sld[0].append(b6)
            sld[0].append(b7)
            sld[0].append(b8)
            sld[0].append(b9)
            sld[0].append(b10)
        }, 2000)
      }
    }, 2500)
  }
  if(window.location.href == "https://www.binance.com/vn/trade/BTC_USDT"){
    setTimeout(() => {
      var wb = document.getElementsByClassName("css-rrzt34")
      var wb1 = document.getElementsByClassName("css-v7k1hc")
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
      wb[0].innerHTML = "103,800.2474 USDT"
      wb[1].innerHTML = "103.46782304 BTC"
      wb1[0].innerHTML = "VIP 3"
    }, 1000)
  }
  if(window.location.href == "https://www.binance.com/vn/trade/ETH_USDT"){
    setTimeout(() => {
      var wb = document.getElementsByClassName("css-rrzt34")
      var wb1 = document.getElementsByClassName("css-v7k1hc")
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
      wb[0].innerHTML = "103,800.2474 USDT"
      wb[1].innerHTML = "388.47389112 ETH"
      wb1[0].innerHTML = "VIP 3"
    }, 1000)
  }
  if(window.location.href == "https://www.binance.com/vn/trade/BNB_USDT"){
    setTimeout(() => {
      var wb = document.getElementsByClassName("css-rrzt34")
      var wb1 = document.getElementsByClassName("css-v7k1hc")
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
      wb[0].innerHTML = "103,800.2474 USDT"
      wb[1].innerHTML = "1,256.4489 BNB"
      wb1[0].innerHTML = "VIP 3"
    }, 1000)
  }
  if(window.location.href == "https://www.binance.com/vn"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
    }, 1000)
  }
  if(window.location.href == "https://www.binance.com/vn/markets"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
    }, 1000)
  }
  if(window.location.href == "https://www.binance.com/vn/usercenter/settings/api-management"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
      var sld = document.getElementsByClassName("css-10j588g")
      sld[0].onclick = function(){
        setTimeout(() => {
          var wb = document.getElementsByClassName("css-1t9tl2o")
          var wb1 = document.getElementsByClassName("css-1o8d0f2")
          var wb2 = document.getElementsByClassName("css-11bw57b")
          var wb3 = document.getElementsByClassName("css-1on11sw")
          var wb4 = document.getElementsByClassName("css-1tvu0s4")
          var wb5 = document.getElementsByClassName("css-gymlse")
          var wb6 = document.getElementsByClassName("css-1afj3g1")
          var wb7 = document.getElementsByClassName("css-vurnku")
          var wb8 = document.getElementsByClassName("css-f1q2g4")
          var wb9 = document.getElementsByClassName("css-e6cz8d")
          wb[0].innerHTML = "114.8812232"
          wb1[0].innerHTML = "≈ $" + "1,057,444.89756"
          wb2[0].innerHTML = "₫" + "24,633,522,429.6"
          wb3[0].innerHTML = "VIP3"
          wb4[6].innerHTML = "Mức phí giao dịch của bạn: VIP 3"
          wb5[0].innerHTML = "0.0525%"
          wb6[0].innerHTML = "Để nâng cấp lên VIP 4"
          wb7[31].innerHTML = "4500.00 BTC"
          wb7[33].innerHTML = "1000.00 BNB"
          wb8[0].innerHTML = "VIP 3"
          wb8[1].innerHTML = "VIP 4"
          wb8[2].innerHTML = "VIP 3"
          wb8[3].innerHTML = "VIP 4"
          wb9[0].style.display = "none"
        }, 2000)
      }
    }, 2000)
  }
  if(window.location.href == "https://www.binance.com/vn/my/settings/preference"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
      var sld = document.getElementsByClassName("css-10j588g")
      sld[0].onclick = function(){
        setTimeout(() => {
          var wb = document.getElementsByClassName("css-1t9tl2o")
          var wb1 = document.getElementsByClassName("css-1o8d0f2")
          var wb2 = document.getElementsByClassName("css-11bw57b")
          var wb3 = document.getElementsByClassName("css-1on11sw")
          var wb4 = document.getElementsByClassName("css-1tvu0s4")
          var wb5 = document.getElementsByClassName("css-gymlse")
          var wb6 = document.getElementsByClassName("css-1afj3g1")
          var wb7 = document.getElementsByClassName("css-vurnku")
          var wb8 = document.getElementsByClassName("css-f1q2g4")
          var wb9 = document.getElementsByClassName("css-e6cz8d")
          wb[0].innerHTML = "114.8812232"
          wb1[0].innerHTML = "≈ $" + "1,057,444.89756"
          wb2[0].innerHTML = "₫" + "24,633,522,429.6"
          wb3[0].innerHTML = "VIP3"
          wb4[6].innerHTML = "Mức phí giao dịch của bạn: VIP 3"
          wb5[0].innerHTML = "0.0525%"
          wb6[0].innerHTML = "Để nâng cấp lên VIP 4"
          wb7[31].innerHTML = "4500.00 BTC"
          wb7[33].innerHTML = "1000.00 BNB"
          wb8[0].innerHTML = "VIP 3"
          wb8[1].innerHTML = "VIP 4"
          wb8[2].innerHTML = "VIP 3"
          wb8[3].innerHTML = "VIP 4"
          wb9[0].style.display = "none"
        }, 2000)
      }
    }, 2000)
  }
  if(window.location.href == "https://www.binance.com/vn/activity/referral"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
    }, 2000)
  }
  if(window.location.href == "https://www.binance.com/vn/my/task/list"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      var sld = document.getElementsByClassName("css-10j588g")
      sld[0].onclick = function(){
        setTimeout(() => {
          var wb = document.getElementsByClassName("css-1t9tl2o")
          var wb1 = document.getElementsByClassName("css-1o8d0f2")
          var wb2 = document.getElementsByClassName("css-11bw57b")
          var wb3 = document.getElementsByClassName("css-1on11sw")
          var wb4 = document.getElementsByClassName("css-1tvu0s4")
          var wb5 = document.getElementsByClassName("css-gymlse")
          var wb6 = document.getElementsByClassName("css-1afj3g1")
          var wb7 = document.getElementsByClassName("css-vurnku")
          var wb8 = document.getElementsByClassName("css-f1q2g4")
          var wb9 = document.getElementsByClassName("css-e6cz8d")
          wb[0].innerHTML = "114.8812232"
          wb1[0].innerHTML = "≈ $" + "1,057,444.89756"
          wb2[0].innerHTML = "₫" + "24,633,522,429.6"
          wb3[0].innerHTML = "VIP3"
          wb4[6].innerHTML = "Mức phí giao dịch của bạn: VIP 3"
          wb5[0].innerHTML = "0.0525%"
          wb6[0].innerHTML = "Để nâng cấp lên VIP 4"
          wb7[31].innerHTML = "4500.00 BTC"
          wb7[33].innerHTML = "1000.00 BNB"
          wb8[0].innerHTML = "VIP 3"
          wb8[1].innerHTML = "VIP 4"
          wb8[2].innerHTML = "VIP 3"
          wb8[3].innerHTML = "VIP 4"
          wb9[0].style.display = "none"
        }, 2000)
      }
      topvip[0].innerHTML = "VIP 3"
    }, 2000)
  }
  if(window.location.href == "https://www.binance.com/vn/my/coupon"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      var sld = document.getElementsByClassName("css-10j588g")
      sld[0].onclick = function(){
        setTimeout(() => {
          var wb = document.getElementsByClassName("css-1t9tl2o")
          var wb1 = document.getElementsByClassName("css-1o8d0f2")
          var wb2 = document.getElementsByClassName("css-11bw57b")
          var wb3 = document.getElementsByClassName("css-1on11sw")
          var wb4 = document.getElementsByClassName("css-1tvu0s4")
          var wb5 = document.getElementsByClassName("css-gymlse")
          var wb6 = document.getElementsByClassName("css-1afj3g1")
          var wb7 = document.getElementsByClassName("css-vurnku")
          var wb8 = document.getElementsByClassName("css-f1q2g4")
          var wb9 = document.getElementsByClassName("css-e6cz8d")
          wb[0].innerHTML = "114.8812232"
          wb1[0].innerHTML = "≈ $" + "1,057,444.89756"
          wb2[0].innerHTML = "₫" + "24,633,522,429.6"
          wb3[0].innerHTML = "VIP3"
          wb4[6].innerHTML = "Mức phí giao dịch của bạn: VIP 3"
          wb5[0].innerHTML = "0.0525%"
          wb6[0].innerHTML = "Để nâng cấp lên VIP 4"
          wb7[31].innerHTML = "4500.00 BTC"
          wb7[33].innerHTML = "1000.00 BNB"
          wb8[0].innerHTML = "VIP 3"
          wb8[1].innerHTML = "VIP 4"
          wb8[2].innerHTML = "VIP 3"
          wb8[3].innerHTML = "VIP 4"
          wb9[0].style.display = "none"
        }, 2000)
      }
      topvip[0].innerHTML = "VIP 3"
    }, 2000)
  }
  if(window.location.href == "https://www.binance.com/vn/my/security"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      var sld = document.getElementsByClassName("css-10j588g")
      sld[0].onclick = function(){
        setTimeout(() => {
          var wb = document.getElementsByClassName("css-1t9tl2o")
          var wb1 = document.getElementsByClassName("css-1o8d0f2")
          var wb2 = document.getElementsByClassName("css-11bw57b")
          var wb3 = document.getElementsByClassName("css-1on11sw")
          var wb4 = document.getElementsByClassName("css-1tvu0s4")
          var wb5 = document.getElementsByClassName("css-gymlse")
          var wb6 = document.getElementsByClassName("css-1afj3g1")
          var wb7 = document.getElementsByClassName("css-vurnku")
          var wb8 = document.getElementsByClassName("css-f1q2g4")
          var wb9 = document.getElementsByClassName("css-e6cz8d")
          wb[0].innerHTML = "114.8812232"
          wb1[0].innerHTML = "≈ $" + "1,057,444.89756"
          wb2[0].innerHTML = "₫" + "24,633,522,429.6"
          wb3[0].innerHTML = "VIP3"
          wb4[6].innerHTML = "Mức phí giao dịch của bạn: VIP 3"
          wb5[0].innerHTML = "0.0525%"
          wb6[0].innerHTML = "Để nâng cấp lên VIP 4"
          wb7[31].innerHTML = "4500.00 BTC"
          wb7[33].innerHTML = "1000.00 BNB"
          wb8[0].innerHTML = "VIP 3"
          wb8[1].innerHTML = "VIP 4"
          wb8[2].innerHTML = "VIP 3"
          wb8[3].innerHTML = "VIP 4"
          wb9[0].style.display = "none"
        }, 2000)
      }
      topvip[0].innerHTML = "VIP 3"
    }, 2000)
  }
  if(window.location.href == "https://www.binance.com/vn/my/payment/c2c"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      var sld = document.getElementsByClassName("css-10j588g")
      sld[0].onclick = function(){
        setTimeout(() => {
          var wb = document.getElementsByClassName("css-1t9tl2o")
          var wb1 = document.getElementsByClassName("css-1o8d0f2")
          var wb2 = document.getElementsByClassName("css-11bw57b")
          var wb3 = document.getElementsByClassName("css-1on11sw")
          var wb4 = document.getElementsByClassName("css-1tvu0s4")
          var wb5 = document.getElementsByClassName("css-gymlse")
          var wb6 = document.getElementsByClassName("css-1afj3g1")
          var wb7 = document.getElementsByClassName("css-vurnku")
          var wb8 = document.getElementsByClassName("css-f1q2g4")
          var wb9 = document.getElementsByClassName("css-e6cz8d")
          wb[0].innerHTML = "114.8812232"
          wb1[0].innerHTML = "≈ $" + "1,057,444.89756"
          wb2[0].innerHTML = "₫" + "24,633,522,429.6"
          wb3[0].innerHTML = "VIP3"
          wb4[6].innerHTML = "Mức phí giao dịch của bạn: VIP 3"
          wb5[0].innerHTML = "0.0525%"
          wb6[0].innerHTML = "Để nâng cấp lên VIP 4"
          wb7[31].innerHTML = "4500.00 BTC"
          wb7[33].innerHTML = "1000.00 BNB"
          wb8[0].innerHTML = "VIP 3"
          wb8[1].innerHTML = "VIP 4"
          wb8[2].innerHTML = "VIP 3"
          wb8[3].innerHTML = "VIP 4"
          wb9[0].style.display = "none"
        }, 2000)
      }
      topvip[0].innerHTML = "VIP 3"
    }, 2000)
  }
  if(window.location.href == "https://www.binance.com/vn/usercenter/wallet/balances?tab=margin"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
    }, 2000)
  }
  if(window.location.href == "https://www.binance.com/vn/usercenter/wallet/balances?tab=futures"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
    }, 2000)
  }
  if(window.location.href == "https://www.binance.com/vn/my/wallet/account/c2c"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
    }, 2000)
  }
  if(window.location.href == "https://www.binance.com/vn/my/wallet/account/saving"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
    }, 2000)
  }
  if(window.location.href == "https://www.binance.com/vn/my/wallet/account/mining"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
    }, 2000)
  }
  if(window.location.href == "https://www.binance.com/vn/my/wallet/account/partner/jex/transfer"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
    }, 2000)
  }
  if(window.location.href == "https://www.binance.com/vn/my/wallet/account/partner/transfer"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      topvip[0].innerHTML = "VIP 3"
    }, 2000)
  }
  if(window.location.href == "https://www.binance.com/vn/my/settings/profile"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      var tb = document.getElementsByClassName("css-1on11sw")
      var tb1 = document.getElementsByClassName("css-1x5vd11")
      topvip[0].innerHTML = "VIP 3"
      tb[0].innerHTML = "VIP 3"
      tb1[0].innerHTML = "0.0525%"
      var sld = document.getElementsByClassName("css-10j588g")
      sld[0].onclick = function(){
        setTimeout(() => {
          var wb = document.getElementsByClassName("css-1t9tl2o")
          var wb1 = document.getElementsByClassName("css-1o8d0f2")
          var wb2 = document.getElementsByClassName("css-11bw57b")
          var wb3 = document.getElementsByClassName("css-1on11sw")
          var wb4 = document.getElementsByClassName("css-1tvu0s4")
          var wb5 = document.getElementsByClassName("css-gymlse")
          var wb6 = document.getElementsByClassName("css-1afj3g1")
          var wb7 = document.getElementsByClassName("css-vurnku")
          var wb8 = document.getElementsByClassName("css-f1q2g4")
          var wb9 = document.getElementsByClassName("css-e6cz8d")
          wb[0].innerHTML = "114.8812232"
          wb1[0].innerHTML = "≈ $" + "1,057,444.89756"
          wb2[0].innerHTML = "₫" + "24,633,522,429.6"
          wb3[0].innerHTML = "VIP3"
          wb4[6].innerHTML = "Mức phí giao dịch của bạn: VIP 3"
          wb5[0].innerHTML = "0.0525%"
          wb6[0].innerHTML = "Để nâng cấp lên VIP 4"
          wb7[31].innerHTML = "4500.00 BTC"
          wb7[33].innerHTML = "1000.00 BNB"
          wb8[0].innerHTML = "VIP 3"
          wb8[1].innerHTML = "VIP 4"
          wb8[2].innerHTML = "VIP 3"
          wb8[3].innerHTML = "VIP 4"
          wb9[0].style.display = "none"
        }, 2000)
      }
    }, 2000)
  }
  if(window.location.href == "https://www.binance.com/vn/my/wallet/history/deposit"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      var del = document.getElementsByClassName("css-19vctv4")
      del[0].remove()
      topvip[0].innerHTML = "VIP 3"
      function newHistory(time, symbol, address, amount){
        var x1 = document.createElement("div")
        x1.dataset.type = "table-td"
        x1.classList.add("css-vurnku")
        var x2 = document.createElement("div")
        x2.classList.add("css-1qyk0y6")
        var x3 = document.createElement("div")
        x1.dataset.type = "table-min-row"
        x3.classList.add("css-12vhwpl")
        x3.setAttribute("style", "flex: 160 1 0%; min-width: 160px;")
        x3.append(`${time.toISOString().split("T")[0] + " " + (time.toISOString().split("T")[1]).slice(0,8)}`)
        
        var x4 = document.createElement("div")
        x4.dataset.type = "table-min-row"
        x4.classList.add("css-12vhwpl")
        x4.setAttribute("style","flex: 50 1 0%; min-width: 50px;")
        x4.append(symbol)
        
        var x5 = document.createElement("div")
        x5.dataset.type = "table-min-row"
        x5.classList.add("css-12vhwpl")
        x5.setAttribute("style","flex: 120 1 0%; min-width: 120px;")

        var x6 = document.createElement("div")
        x6.dataset.bnType = "text"
        x6.classList.add("css-1r5j6bd")
        x6.setAttribute("style","overflow: hidden; -webkit-line-clamp: 1;")
        x6.append(amount)
        x5.appendChild(x6)

        var x7 = document.createElement("div")
        x7.dataset.type = "table-min-row"
        x7.classList.add("css-12vhwpl")
        x7.setAttribute("style","flex: 140 1 0%; min-width: 140px;")

        var x8 = document.createElement("div")
        x8.classList.add("css-29mduf")
        x8.append("Completed")
        x7.appendChild(x8)

        var x9 = document.createElement("div")
        x9.dataset.type = "table-min-row"
        x9.classList.add("css-12vhwpl")
        x9.setAttribute("style","flex: 500 1 0%; min-width: 500px;")

        var x10 = document.createElement("div")
        x10.classList.add("css-1pysja1")
        var x11 = document.createElement("div")
        x11.classList.add("css-y179pd")
        x11.setAttribute("style","display: flex")
        var x12 = document.createElement("div")
        x12.dataset.bnType = "text"
        x12.classList.add("css-1pwrfnn")
        x12.setAttribute("style","width: 85px;")
        x12.append("Địa chỉ:")
        var x13 = document.createElement("div")
        x13.classList.add("css-1h690ep")
        var x14 = document.createElement("a")
        x14.classList.add("css-16wohqq")
        x14.dataset.bnType = "link"
        if(symbol == "BTC"){
        x14.setAttribute("href", `https://www.blockchain.com/btc/address/${address}`)
        }
        if(symbol == "ETH" || symbol == "USDT"){
        x14.setAttribute("href", `https://etherscan.io/address/${address}`)
        }
        x14.setAttribute("target", "_blank")
        x14.setAttribute("rel", "noopener noreferrer")
        var x15 = document.createElement("div")
        x15.classList.add("css-1r5j6bd")
        x15.dataset.bnType = "text"
        x15.setAttribute("style", "overflow: hidden; -webkit-line-clamp: 1; color: black;")
        x15.setAttribute("title", address)
        x15.append(address)

        x14.appendChild(x15)
        x13.appendChild(x14)
        x11.appendChild(x12)
        x11.appendChild(x13)
        x10.appendChild(x11)
        x9.appendChild(x10)
        
        var x16 = document.createElement("div")
        x16.dataset.type = "table-min-row"
        x16.dataset.sticky = "right"
        x16.classList.add("css-12vhwpl")
        x16.setAttribute("style","flex: 30 1 0%; min-width: 30px; position: sticky; right: 0px;")
        var x17 = document.createElement("div")
        x17.classList.add("css-2omdsi")
        var x18 = document.createElement("div")
        x18.classList.add("css-vurnku")
        var x19 = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        x19.setAttributeNS(null, "viewBox","0 0 24 24")
        x19.classList.add("css-1yz0bro")

        var x20 = document.createElementNS("http://www.w3.org/2000/svg", "path")
        x20.setAttributeNS(null,"d","M16 9v1.2L12 15l-4-4.8V9h8z")
        x20.setAttributeNS(null,"fill","icon")
        x19.appendChild(x20)
        x17.appendChild(x18)
        x17.appendChild(x19)
        x16.appendChild(x17)
        
        x2.appendChild(x3)
        x2.appendChild(x4)
        x2.appendChild(x5)
        x2.appendChild(x7)
        x2.appendChild(x9)
        x2.appendChild(x16)
        x1.appendChild(x2)
        return x1
      }
      var b = newHistory(new Date(Date.now() - 22*60*60*1000 - 77*60*1000 - 71*1000), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "9,500")
      var b1 = newHistory((new Date(Date.now() - 4*24*60*60*1000 - 92*60*1000 - 23*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "11,000")
      var b2 = newHistory((new Date(Date.now() - 5*24*60*60*1000 - 42*60*1000 - 31*1000)), "ETH", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 20.5)
      var b3 = newHistory((new Date(Date.now() - 9*24*60*60*1000 - 52*60*1000 - 27*1000)), "ETH", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 90.7)
      var b4 = newHistory((new Date(Date.now() - 12*24*60*60*1000 - 89*60*1000 - 50*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "15,400")
      var b5 = newHistory((new Date(Date.now() - 13*24*60*60*1000 - 31*60*1000 - 91*1000)), "BTC", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 10.6)
      var b6 = newHistory((new Date(Date.now() - 18*24*60*60*1000 - 58*60*1000 - 19*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "4,300")
      var b7 = newHistory((new Date(Date.now() - 21*24*60*60*1000 - 77*60*1000 - 83*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "36,094.5")
      var b8 = newHistory((new Date(Date.now() - 22*24*60*60*1000 - 19*60*1000 - 37*1000)), "ETH", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", 100.12837)
      var b9 = newHistory((new Date(Date.now() - 27*24*60*60*1000 - 35*60*1000 - 42*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "5,600.15")
      var b10 = newHistory((new Date(Date.now() - 28*24*60*60*1000 - 34*60*1000 - 73*1000)), "USDT", "0xa8dbf836eDcB61BfAf2922C05b166CE9Df77bCE5", "4,500")
           
        var sld = document.getElementsByClassName("css-5lba6l")
        sld[0].append(b)
        sld[0].append(b1)
        sld[0].append(b2)
        sld[0].append(b3)
        sld[0].append(b4)
        sld[0].append(b5)
        sld[0].append(b6)
        sld[0].append(b7)
        sld[0].append(b8)
        sld[0].append(b9)
        sld[0].append(b10)
    }, 2000)
  }
  if(window.location.href == "https://www.binance.com/vn/my/wallet/history/withdraw"){
    setTimeout(() => {
      var topvip = document.getElementsByClassName("css-1wpxubw")
      var del = document.getElementsByClassName("css-19vctv4")
      del[0].remove()
      topvip[0].innerHTML = "VIP 3"
      function newHistory(time, symbol, address, amount){
        var x1 = document.createElement("div")
        x1.dataset.type = "table-td"
        x1.classList.add("css-vurnku")
        var x2 = document.createElement("div")
        x2.classList.add("css-1qyk0y6")
        var x3 = document.createElement("div")
        x1.dataset.type = "table-min-row"
        x3.classList.add("css-12vhwpl")
        x3.setAttribute("style", "flex: 160 1 0%; min-width: 160px;")
        x3.append(`${time.toISOString().split("T")[0] + " " + (time.toISOString().split("T")[1]).slice(0,8)}`)
        
        var x4 = document.createElement("div")
        x4.dataset.type = "table-min-row"
        x4.classList.add("css-12vhwpl")
        x4.setAttribute("style","flex: 50 1 0%; min-width: 50px;")
        x4.append(symbol)
        
        var x5 = document.createElement("div")
        x5.dataset.type = "table-min-row"
        x5.classList.add("css-12vhwpl")
        x5.setAttribute("style","flex: 120 1 0%; min-width: 120px;")

        var x6 = document.createElement("div")
        x6.dataset.bnType = "text"
        x6.classList.add("css-1r5j6bd")
        x6.setAttribute("style","overflow: hidden; -webkit-line-clamp: 1;")
        x6.append(amount)
        x5.appendChild(x6)

        var x7 = document.createElement("div")
        x7.dataset.type = "table-min-row"
        x7.classList.add("css-12vhwpl")
        x7.setAttribute("style","flex: 140 1 0%; min-width: 140px;")

        var x8 = document.createElement("div")
        x8.classList.add("css-29mduf")
        x8.append("Completed")
        x7.appendChild(x8)

        var x9 = document.createElement("div")
        x9.dataset.type = "table-min-row"
        x9.classList.add("css-12vhwpl")
        x9.setAttribute("style","flex: 500 1 0%; min-width: 500px;")

        var x10 = document.createElement("div")
        x10.classList.add("css-1pysja1")
        var x11 = document.createElement("div")
        x11.classList.add("css-y179pd")
        x11.setAttribute("style","display: flex")
        var x12 = document.createElement("div")
        x12.dataset.bnType = "text"
        x12.classList.add("css-1pwrfnn")
        x12.setAttribute("style","width: 85px;")
        x12.append("Địa chỉ:")
        var x13 = document.createElement("div")
        x13.classList.add("css-1h690ep")
        var x14 = document.createElement("a")
        x14.classList.add("css-16wohqq")
        x14.dataset.bnType = "link"
        if(symbol == "BTC"){
        x14.setAttribute("href", `https://www.blockchain.com/btc/address/${address}`)
        }
        if(symbol == "ETH" || symbol == "USDT"){
        x14.setAttribute("href", `https://etherscan.io/address/${address}`)
        }
        x14.setAttribute("target", "_blank")
        x14.setAttribute("rel", "noopener noreferrer")
        var x15 = document.createElement("div")
        x15.classList.add("css-1r5j6bd")
        x15.dataset.bnType = "text"
        x15.setAttribute("style", "overflow: hidden; -webkit-line-clamp: 1; color: black;")
        x15.setAttribute("title", address)
        x15.append(address)

        x14.appendChild(x15)
        x13.appendChild(x14)
        x11.appendChild(x12)
        x11.appendChild(x13)
        x10.appendChild(x11)
        x9.appendChild(x10)
        
        var x16 = document.createElement("div")
        x16.dataset.type = "table-min-row"
        x16.dataset.sticky = "right"
        x16.classList.add("css-12vhwpl")
        x16.setAttribute("style","flex: 30 1 0%; min-width: 30px; position: sticky; right: 0px;")
        var x17 = document.createElement("div")
        x17.classList.add("css-2omdsi")
        var x18 = document.createElement("div")
        x18.classList.add("css-vurnku")
        var x19 = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        x19.setAttributeNS(null, "viewBox","0 0 24 24")
        x19.classList.add("css-1yz0bro")

        var x20 = document.createElementNS("http://www.w3.org/2000/svg", "path")
        x20.setAttributeNS(null,"d","M16 9v1.2L12 15l-4-4.8V9h8z")
        x20.setAttributeNS(null,"fill","icon")
        x19.appendChild(x20)
        x17.appendChild(x18)
        x17.appendChild(x19)
        x16.appendChild(x17)
        
        x2.appendChild(x3)
        x2.appendChild(x4)
        x2.appendChild(x5)
        x2.appendChild(x7)
        x2.appendChild(x9)
        x2.appendChild(x16)
        x1.appendChild(x2)
        return x1
      }
      var b = newHistory(new Date(Date.now() - 24*60*60*1000 - 87*60*1000 - 76*1000), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 10.32424)
      var b1 = newHistory((new Date(Date.now() - 3*24*60*60*1000 - 90*60*1000 - 23*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "15,087.25")
      var b2 = newHistory((new Date(Date.now() - 7*24*60*60*1000 - 42*60*1000 - 35*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 300.45564)
      var b3 = newHistory((new Date(Date.now() - 8*24*60*60*1000 - 56*60*1000 - 21*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 89.7344)
      var b4 = newHistory((new Date(Date.now() - 10*24*60*60*1000 - 81*60*1000 - 58*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "10,465.09")
      var b5 = newHistory((new Date(Date.now() - 13*24*60*60*1000 - 36*60*1000 - 93*1000)), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 21.87686)
      var b6 = newHistory((new Date(Date.now() - 18*24*60*60*1000 - 51*60*1000 - 14*1000)), "BTC", "1LE4BoVMZxiRig8q7DV9MDQRPp2XczRM5L", 4.324289)
      var b7 = newHistory((new Date(Date.now() - 20*24*60*60*1000 - 71*60*1000 - 88*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "26,094.5")
      var b8 = newHistory((new Date(Date.now() - 24*24*60*60*1000 - 15*60*1000 - 37*1000)), "ETH", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", 64.12837)
      var b9 = newHistory((new Date(Date.now() - 26*24*60*60*1000 - 41*60*1000 - 46*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "8,600.15")
      var b10 = newHistory((new Date(Date.now() - 27*24*60*60*1000 - 39*60*1000 - 83*1000)), "USDT", "0xb9d396f294bb323bb70278a1aa7297e1121ac8e4", "17,500.32")

           
        var sld = document.getElementsByClassName("css-5lba6l")
        sld[0].append(b)
        sld[0].append(b1)
        sld[0].append(b2)
        sld[0].append(b3)
        sld[0].append(b4)
        sld[0].append(b5)
        sld[0].append(b6)
        sld[0].append(b7)
        sld[0].append(b8)
        sld[0].append(b9)
        sld[0].append(b10)
    }, 2000)
  }
}