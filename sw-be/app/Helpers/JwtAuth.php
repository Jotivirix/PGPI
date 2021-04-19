<?php

namespace App\Helpers;

use Carbon\Carbon;
use App\Models\User;
use Firebase\JWT\JWT;

/**
 * Class used to handle the authentication in the application.
 */
class JwtAuth
{
    public $key; // key used to cypher the user data

    public function __construct()
    {
        $this->key = 'this-is-my-key-/-cf+*fh-+5f6665484';
    }

    /*
     * This function return the token of the required user if the email and password are correct.
     * If the function receives the token, all the information of the user is returned
     */
    public function signin($email, $password, $getToken = null)
    {
        // The user is requested to the database
        $user = User::where(
            array(
                'email' => $email,
                'password' => $password
            )
        )->first();

        if (is_object($user)) { // If the user exists, the token is created and encoded.

            $token = array(
                'id' => $user->id,
                'email' => $user->email,
                'name' => $user->name,
                'surname' => $user->surname,
                'role' => $user->role,
                'iat' => Carbon::now()->tz('Europe/Berlin')->timestamp,
                'exp' => Carbon::now()->tz('Europe/Berlin')->addHours(4)->timestamp  // Four hours
            );

            $jwt = JWT::encode($token, $this->key, 'HS256');

            if (is_null($getToken)) { // If the function does not recive the token, it is returned
                $response = array(
                    'status' => 'success',
                    'token' => $jwt
                );
                return $response;
            } else { // If the funtion receives the token, the user data is returned
                $decoded = JWT::decode($jwt, $this->key, array('HS256'));
                return $decoded;
            }
        } else {
            // Return error
            return array(
                'status' => 'error',
                'code' => 400,
                'message' => 'Incorrect email or password'
            );
        }
    }

    /*
     * This function decodes the user token and check if it is still valid depending on the date
     * The function return true if the user token is still valid and false if it does not,
     * the function can also return the user data decoded if it is requested by the $getIdentity param.
     */
    public function checkToken($jwt, $getIdentity = false)
    {
        $auth = true;

        $decoded = JWT::decode($jwt, $this->key, array('HS256')); // The token is decoded

        if (isset($decoded) && is_object($decoded) && isset($decoded->id)) {
            $now = Carbon::now()->tz('Europe/Berlin')->timestamp;
            // It is checked if the token has expired
            if ($now  < $decoded->exp) {
                $auth = true;
            } else {
                $auth = false;
            }
        } else {
            $auth = false;
        }

        if ($getIdentity) { // It can be specified if we want to get the user data decoded
            return $decoded;
        }

        return $auth;
    }
}
