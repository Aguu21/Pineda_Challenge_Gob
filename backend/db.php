<?php
class DB {
    private static $host = 'localhost';
    private static $nombreDB = 'challenge';
    private static $usuario = 'root';
    private static $contra = '';
    private static $pdo = null;

    public static function connect() {
        if (self::$pdo === null) {
            try {
                self::$pdo = new PDO(
                    "mysql:host=" . self::$host . ";dbname=" . self::$nombreDB,
                    self::$usuario,
                    self::$contra
                );
                self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                die("Error de conexión: " . $e->getMessage());
            }
        }
        return self::$pdo;
    }

    public static function disconnect() {
        self::$pdo = null;
    }
}
