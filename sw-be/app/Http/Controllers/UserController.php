<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Helpers\JwtAuth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /*
     * This function saves the new user received into the database
     */
    public function register(Request $request)
    {
        // Receive POST
        $data = $request->input();

        $name = (!is_null($data) && isset($data['name'])) ? $data['name'] : null;
        $surname = (!is_null($data) && isset($data['surname'])) ? $data['surname'] : null;
        $email = (!is_null($data) && isset($data['email'])) ? $data['email'] : null;
        $password = (!is_null($data) && isset($data['password'])) ? $data['password'] : $name;
        $role = (!is_null($data) && isset($data['role'])) ? $data['role'] : 'customer';
        $phone_number = (!is_null($data) && isset($data['phone_number'])) ? $data['phone_number'] : null;
        $street = (!is_null($data) && isset($data['street'])) ? $data['street'] : null;
        $city = (!is_null($data) && isset($data['city'])) ? $data['city'] : null;
        $zip_code = (!is_null($data) && isset($data['zip_code'])) ? $data['zip_code'] : null;
        $country = (!is_null($data) && isset($data['country'])) ? $data['country'] : null;

        if (!is_null($name) && !is_null($email) && !is_null($password)) {
            // Create user
            $user = new User();
            $user->name = $name;
            $user->surname = $surname;
            $user->email = $email;
            $user->password = hash('sha256', $password);
            $user->role = $role;
            $user->phone_number = $phone_number;
            $user->street = $street;
            $user->city = $city;
            $user->zip_code = $zip_code;
            $user->country = $country;

            // Check duplicated user
            $isset_user = User::where('email', '=', $email)->first();

            if (is_null($isset_user)) {
                // Save user
                $user->save();

                $data = array(
                    'status' => 'success',
                    'code' => 200,
                    'message' => 'The user was added successfully'
                );
            } else {
                // Already exists
                $data = array(
                    'status' => 'error',
                    'code' => 400,
                    'message' => 'This email already exists'
                );
            }
        } else {
            $data = array(
                'status' => 'error',
                'code' => 400,
                'message' => 'User not created'
            );
        }

        return response()->json($data, 200);
    }

    /*
     * This function check if the user is on the database and creates a token
     */
    public function login(Request $request)
    {
        $jwtAuth = new JwtAuth();

        // Receive POST
        $data = $request->input();

        $email = (!is_null($data) && isset($data['email'])) ? $data['email'] : null;
        $password = (!is_null($data) && isset($data['password'])) ? $data['password'] : null;
        $getToken = (!is_null($data) && isset($data['token'])) ? $data['token'] : null;

        // Cipher password
        $pwd = hash('sha256', $password);

        if (!is_null($email) && !is_null($password) && ($getToken == null || $getToken == 'false')) {
            $response = $jwtAuth->signin($email, $pwd);
        } elseif ($getToken != null) {
            $response = $jwtAuth->signin($email, $pwd, $getToken);
        } else {
            $response = array(
                'status' => 'error',
                'message' => 'Send data by POST'
            );
        }

        return response()->json($response, 200);
    }
}
