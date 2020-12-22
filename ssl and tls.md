

# 传输层安全性协议

> 2020-12-22



**传输层安全性协议**（**T**ransport **L**ayer **S**ecurity，**TLS**）及其前身**安全套接层**（**S**ecure **S**ockets **L**ayer，**SSL**）是一种安全协议，目的是为互联网通信提供安全及数据完整性保障。



**TLS握手过程**

- 当客户端连接到支持*TLS*协议的服务器要求创建安全连接并列出了受支持的密码包 *cipher suites*（包括加密算法、散列算法等），握手开始。
- 服务器从该列表中决定密码包，并通知客户端。
- 服务器发回其数字证书，此证书通常包含服务器的名称、受信任的证书颁发机构和服务器的公钥。
- 客户端确认其颁发的证书的有效性。
- 为了生成会话密钥用于安全连接，客户端使用服务器的公钥加密随机生成的密钥，并将其发送到服务器，只有服务器才能使用自己的私钥解密。
- 利用随机数，双方生成用于加密和解密的对称密钥。这就是TLS协议的握手，握手完毕后的连接是安全的，直到连接（被）关闭。如果上述任何一个步骤失败，TLS握手过程就会失败，并且断开所有的连接。



**TLS包含几个基本阶段**

1. 对等协商支持的*TLS*版本，和支持的密码包。
2. 基于非对称秘钥的身份认证。服务器将证书发送给客户端，由客户端验证服务器的身份。通常仅验证服务器，不验证客户端。
3. 基于对称秘钥的数据加密。客户端生成随机数作为回话秘钥，并使用服务器公钥（服务器公钥在服务器证书中）加密会话密钥，最后将已加密的会话密钥发送给服务器。由服务器的私钥解密出会话密钥。最后使用此会话密钥加密数据。*TLS*也可以使用预共享密钥（*PSK*）作为对称密钥。

在第一阶段，客户端与服务器协商所用密码算法。当前广泛实现的算法选择如下：

- 身份验证：[RSA](https://zh.wikipedia.org/wiki/RSA)、[DSA](https://zh.wikipedia.org/wiki/DSA)、[ECDSA](https://zh.wikipedia.org/wiki/ECDSA)；
- 密钥交换：[PSK](https://zh.wikipedia.org/wiki/PSK)、[Diffie-Hellman](https://zh.wikipedia.org/wiki/Diffie-Hellman)、[ECDH](https://zh.wikipedia.org/wiki/ECDH)；
- 对称密钥加密：[RC4](https://zh.wikipedia.org/wiki/RC4)、[DES](https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E5%8A%A0%E5%AF%86%E6%A0%87%E5%87%86)、[3DES](https://zh.wikipedia.org/wiki/3DES)、[AES](https://zh.wikipedia.org/wiki/%E9%AB%98%E7%BA%A7%E5%8A%A0%E5%AF%86%E6%A0%87%E5%87%86)、[ChaCha20](https://zh.wikipedia.org/wiki/ChaCha20)以及[Camellia](https://zh.wikipedia.org/wiki/Camellia)；
- [散列函数](https://zh.wikipedia.org/wiki/%E6%95%A3%E5%88%97%E5%87%BD%E6%95%B0)：[MD5](https://zh.wikipedia.org/wiki/MD5)、[SHA家族](https://zh.wikipedia.org/wiki/SHA%E5%AE%B6%E6%97%8F)。



**参考**

[ [0](https://zh.wikipedia.org/wiki/%E5%82%B3%E8%BC%B8%E5%B1%A4%E5%AE%89%E5%85%A8%E6%80%A7%E5%8D%94%E5%AE%9A) ] *wiki*

[ [1](https://www.cloudflare.com/zh-cn/learning/ssl/what-is-a-session-key/) ] *what is a session key*

